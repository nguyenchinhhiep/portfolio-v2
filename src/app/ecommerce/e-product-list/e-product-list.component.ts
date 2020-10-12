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
  products: Array<Product> = [];
  pageSize: number = 8;
  page: number = 1;
  constructor(private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this._ecommerceService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  handlePagination(products, page = 1, resPerpage = 8) {
    const start = (page - 1) * resPerpage;
    const end = page * resPerpage
  }

}
