import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-shipping',
  templateUrl: './cart-shipping.component.html',
  styleUrls: ['./cart-shipping.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartShippingComponent implements OnInit {
  @HostBinding('attr.class') classes = 'cart__shipping d-block';
  constructor() { }

  ngOnInit(): void {
  }

}
