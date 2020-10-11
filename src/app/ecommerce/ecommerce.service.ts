import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Product } from './models/product.model';

@Injectable({
    providedIn: 'root'
})
export class EcommerceService {
    private _jsonURL = 'assets/json/db.json';

    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    loading$: Observable<boolean> = this._loading.asObservable();

    constructor(private _http: HttpClient){
    }

    getProducts(): Observable<Array<Product>> {
        return this._http.get(this._jsonURL).pipe(tap(()=> this.toggleLoader(true)),delay(300),map(res => res['products']),
        tap(()=> this.toggleLoader(false)));
    }

    getProductDetail(id: number): Observable<Product> {
        return this.getProducts().pipe(tap(()=> this.toggleLoader(true)),delay(300),map(res => res.find(product => product.id == id)),tap(()=> this.toggleLoader(false)));
    }

    toggleLoader(state: boolean) {
        this._loading.next(state);
    }
}