import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'e-cart',
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ECartComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__cart mt-5 d-block';
  active = 1;
  links = [
    {
      id: 'list',
      title: 'Shopping Cart',
      routerLink: 'list'
    },
    {
      id: 'shipping',
      title: 'Shipping',
      routerLink: 'shipping'
    },
    {
      id: 'payment',
      title: 'Payment',
      routerLink: 'payment'
    },
    {
      id: 'place-order',
      title: 'Place Order',
      routerLink: 'place-order'
    }
  ]
  constructor(private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
  }


  


}
