import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { CartItem } from './models/cart-item.model';
import { Product } from './models/product.model';

@Injectable({
    providedIn: 'root'
})
export class EcommerceService {
    private _jsonURL = 'assets/json/db.json';

    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    loading$: Observable<boolean> = this._loading.asObservable();

    private _cartItem: Subject<CartItem> = new Subject();
    cartItem$: Observable<CartItem> = this._cartItem.asObservable();

    constructor(private _http: HttpClient) {
    }

    getProducts(): Observable<Array<Product>> {
        return this._http.get(this._jsonURL).pipe(tap(() => this.toggleLoader(true)), delay(300), map(res => res['products']),
            tap(() => this.toggleLoader(false)));
    }

    getProductDetail(id: number): Observable<Product> {
        return this.getProducts().pipe(tap(() => this.toggleLoader(true)), delay(300), map(res => res.find(product => product.id == id)), tap(() => this.toggleLoader(false)));
    }

    toggleLoader(state: boolean) {
        this._loading.next(state);
    }

    addToCart(product: Product, quantity: number) {
        const cartItem: CartItem = {
            product: product,
            quantity: quantity
        }
        let cartItems = [];
        if (localStorage.getItem('cartItems')) {
            cartItems = JSON.parse(localStorage.getItem('cartItems'));
        }
        cartItems.push(cartItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

}