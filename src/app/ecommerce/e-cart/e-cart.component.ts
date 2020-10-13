import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'e-cart',
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ECartComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__cart mt-5 d-block';
  active = 1;

  cartItems: Array<CartItem> = [];
  constructor(private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    // this._ecommerceService.cartItem$.subscribe(cartItem => {
    //   this.cartItems.push(cartItem);
    // })
  }


}
