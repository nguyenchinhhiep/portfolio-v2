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
  @HostBinding('attr.class') classes = 'ecommerce__product-detail d-block mt-5';
  productId: number;
  product: any;
  constructor(private _route: ActivatedRoute,
    private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProductDetail(this.productId);
    })
  }

  getProductDetail(id) {
    this._ecommerceService.getProductDetail(id).subscribe(res => {
      this.product = res;
      this.product.quantity = 1;
    });
  }

  onAddToCart() {
    this._ecommerceService.addToCart(this.product, this.product.quantity);
    this._ecommerceService.showToast(`Added ${this.product.quantity} item${this.product.quantity > 1? 's':''} to your cart`, {classname: 'bg-success text-light p-2 font-weight-bold'});
  }

  onChangeAmount(type: string): void {
    if (type === 'desc' && this.product.quantity >= 2) {
      this.product.quantity--;
    } else if (type === 'inc') {
      this.product.quantity++;
    }
  }

}
