import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { EcommerceService } from '../../ecommerce.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  isAuthenticated: boolean = false;
  cartItems: Array<CartItem> = [];
  total: number;
  subTotal: number;
  constructor(private _ecommerceService: EcommerceService, private _authService: AuthService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._authService.firebaseUser.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.getCartItems();
  }

  getCartItems() {
    this.subTotal = 0;
    this.total = 0;
    if (this._ecommerceService.getCartItems()) {
      this.cartItems = this._ecommerceService.getCartItems();
      this.cartItems.forEach((item: any) => {
        item.totalPrice = (item.quantity * item.product.price).toFixed(2);
        this.subTotal += item.quantity * item.product.price;
      });
      this.subTotal = <any>this.subTotal.toFixed(2);
      this.total = this.subTotal;
    }
  }

  onRemoveItem(item) {
    this._ecommerceService.removeItemFromCart(item);
    this.getCartItems();
    this._ecommerceService.showToast('Removed successfully', { classname: 'bg-success text-light p-2 font-weight-bold' });
  }

  onChangeAmount(type: string, cartItem: CartItem) {
    if (type === 'desc' && cartItem.quantity >= 2) {
      cartItem.quantity--;
    } else if (type === 'inc') {
      cartItem.quantity++;
    }
    const quantity = cartItem.quantity;
    this._ecommerceService.updateQuantityCartItem(cartItem.product.id, quantity);
    this.getCartItems();
  }

  onProceedToCheckout() {
    if(this.isAuthenticated){
      this._router.navigate(['./../shipping'], { relativeTo: this._route });
    } else {
      this._ecommerceService.openAuthDialog();
    }
  }

}
