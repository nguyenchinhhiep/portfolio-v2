import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'e-cart',
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ECartComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__cart mt-5 d-block';
  activeTab$: Observable<any>;
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
  constructor(private _ecommerceService: EcommerceService, private _router: Router) {
    this.activeTab$ = this._router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(res => res.url.split('/')[res.url.split('/').length - 1]));
  }

  ngOnInit(): void {

  }





}
