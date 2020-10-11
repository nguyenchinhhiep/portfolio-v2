import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { EcommerceService } from '../ecommerce.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-e-product-list',
  templateUrl: './e-product-list.component.html',
  styleUrls: ['./e-product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EProductListComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__product-list mt-4 d-block';
  products$: Observable<Array<Product>>;
  constructor(private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this.products$ = this._ecommerceService.getProducts().pipe(shareReplay());
  }

}
