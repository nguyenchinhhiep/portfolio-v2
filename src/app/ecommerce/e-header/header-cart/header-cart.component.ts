import { Component, HostBinding, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderCartComponent implements OnInit {
  @HostBinding('attr.class') classes = 'header__cart';

  @HostListener('click') onClick() {
    this._router.navigate(['/ecommerce/cart']);
  }
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
