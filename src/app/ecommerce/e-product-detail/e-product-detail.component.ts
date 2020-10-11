import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EcommerceService } from '../ecommerce.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'e-product-detail',
  templateUrl: './e-product-detail.component.html',
  styleUrls: ['./e-product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EProductDetailComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__product-detail d-block mt-4';
  productId: number;
  product$: Observable<Product>;
  constructor(private _route: ActivatedRoute,
    private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProductDetail(this.productId); 
    })
  }

  getProductDetail(id) {
    this.product$ = this._ecommerceService.getProductDetail(id);
  }

  onAddToCart() {

  }

}
