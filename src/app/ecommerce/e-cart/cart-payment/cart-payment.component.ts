import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartPaymentComponent implements OnInit {
  @HostBinding('attr.class') classes = 'cart__payment d-block';
  paymentMethods = [
    {
      label: 'Paypal or Credit Card',
      value: 'paypal'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
