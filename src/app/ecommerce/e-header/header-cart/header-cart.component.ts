import { Component, HostBinding, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceService } from '../../ecommerce.service';

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
  cartAmount: number = 0;
  constructor(private _ecommerceService: EcommerceService, private _router: Router) { }

  ngOnInit(): void {
    this.getCartAmount();
    this._ecommerceService.cartChange$.subscribe(res => {
      if(res) this.getCartAmount();
    })
  }

  getCartAmount() {
    this.cartAmount = this._ecommerceService.getCartItems().reduce((acc, curr)=> {
      acc+=curr.quantity;
      return acc;
    },0);
  }

}
