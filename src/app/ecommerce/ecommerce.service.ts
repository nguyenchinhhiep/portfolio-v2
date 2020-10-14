import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
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

    toasts: any[] = [];

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

    getCartItems() {
        return JSON.parse(localStorage.getItem('cartItems'));
    }

    addToCart(product: Product, quantity: number) {

        let cartItems = [];
        if (localStorage.getItem('cartItems')) {
            cartItems = JSON.parse(localStorage.getItem('cartItems'));
        }
        const productExistInCart = cartItems.find(item => item.product.id === product.id);
        if (!productExistInCart) {
            const cartItem: CartItem = {
                product: product,
                quantity: quantity
            }
            cartItems.push(cartItem);
        } else {
            productExistInCart.quantity += quantity;
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    removeItemFromCart(item: CartItem) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems'));
        cartItems = cartItems.filter(cartItem => cartItem.product.id !== item.product.id);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Toast
    showToast(textOrTpl: string | TemplateRef<any>, options: any = {}) {
        this.toasts.push({ textOrTpl, ...options });
      }

    removeToast(toast) {
        this.toasts = this.toasts.filter(t => t != toast);
    }

}