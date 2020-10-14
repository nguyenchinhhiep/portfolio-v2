import { isNgTemplate } from '@angular/compiler';
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
  total: number;
  subTotal: number;
  constructor(private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.subTotal = 0;
    this.total = 0;
    this.cartItems = this._ecommerceService.getCartItems();
    this.cartItems.forEach((item: any) => {
      item.totalPrice = (item.quantity * item.product.price).toFixed(2);
      this.subTotal+=item.quantity * item.product.price;
    });
    this.subTotal = <any>this.subTotal.toFixed(2);
    this.total = this.subTotal;
  }

  onRemoveItem(item) {
    this._ecommerceService.removeItemFromCart(item);
    this.getCartItems();
    this._ecommerceService.showToast('Deleted', {classname: 'bg-danger text-light p-2 font-weight-bold'});
  }

  onChangeAmount(type: string, cartItem: CartItem) {
    if(type === 'desc' && cartItem.quantity >= 2) {
      cartItem.quantity--;
    } else if(type === 'inc') {
      cartItem.quantity++;
    }
    const quantity = cartItem.quantity;
    this._ecommerceService.updateQuantityCartItem(cartItem.product.id,quantity );
    this.getCartItems();
  }


}
