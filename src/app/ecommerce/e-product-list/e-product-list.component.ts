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
  @HostBinding('attr.class') classes = 'ecommerce__product-list mt-5 d-block';
  products: Array<Product> = [];
  pageSize: number = 8;
  page: number = 1;

  constructor(private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this._ecommerceService.logoClick$.subscribe(value => {
      if (value) this.page = 1;
    });
    
    this._ecommerceService.getProducts().subscribe(products => {
      this.products = products;
    });
  }


}
