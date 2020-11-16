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

    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    loading$: Observable<boolean> = this._loading.asObservable();

    private _cartChange: Subject<boolean> = new Subject();
    cartChange$: Observable<boolean> = this._cartChange.asObservable();

    private _logoClick: Subject<boolean> = new Subject();
    logoClick$: Observable<boolean> = this._logoClick.asObservable();

    private _openAuthDialog: Subject<boolean> = new Subject();
    openAuthDialog$: Observable<boolean> = this._openAuthDialog.asObservable();

    toasts: any[] = [];

    constructor(private _http: HttpClient) {
    }

    openAuthDialog() {
        this._openAuthDialog.next(true);
    }

    onLogoClick() {
        this._logoClick.next(true);
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
        this._cartChange.next(true);
    }

    removeItemFromCart(item: CartItem) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems'));
        cartItems = cartItems.filter(cartItem => cartItem.product.id !== item.product.id);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this._cartChange.next(true);
    }

    updateQuantityCartItem(id, quantity) {
        const cartItems = this.getCartItems();
        const selectedItem = cartItems.find(item => item.product.id === id);
        const selectedIndex = cartItems.findIndex(item => item.product.id === id);
        const updatedItem = Object.assign({},selectedItem,{quantity: quantity});
        cartItems[selectedIndex] = updatedItem;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this._cartChange.next(true);
    }

    // Toast
    showToast(textOrTpl: string | TemplateRef<any>, options: any = {}) {
        this.toasts.push({ textOrTpl, ...options });
      }

    removeToast(toast) {
        this.toasts = this.toasts.filter(t => t != toast);
    }

}