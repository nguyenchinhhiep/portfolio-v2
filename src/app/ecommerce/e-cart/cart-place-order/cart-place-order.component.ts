import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-place-order',
  templateUrl: './cart-place-order.component.html',
  styleUrls: ['./cart-place-order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartPlaceOrderComponent implements OnInit {
  @HostBinding('attr.class') classes = 'cart__place-order d-block';
  constructor() { }

  ngOnInit(): void {
  }

}
