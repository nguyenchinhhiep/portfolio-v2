import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceService } from '../../ecommerce.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'e-product-item',
  templateUrl: './e-product-item.component.html',
  styleUrls: ['./e-product-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EProductItemComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__product-item d-block border p-3 pb-4 rounded';

  @Input() product: Product;
  constructor(private _ecommerceService: EcommerceService, private _router: Router) { }

  ngOnInit(): void {
    if (!!this.product) {
      this.product.price = parseInt(this.product.price, 10).toFixed(2);
    }
  }

  onGoToDetail(event) {
    if (event.target.nodeName === 'BUTTON') {
      return;
    }
    this._router.navigate([`/ecommerce/product-detail/${this.product.id}`]);
  }

  onAddToCart(product: Product) {
    this._ecommerceService.addToCart(product, 1);
    this._ecommerceService.showToast('Added to your cart', {classname: 'bg-success text-light p-2 font-weight-bold'});
  }

}
