import { NgModule } from '@angular/core';

import { EcommerceComponent } from './ecommerce.component';
import { EHeaderComponent } from './e-header/e-header.component';
import { EFooterComponent } from './e-footer/e-footer.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { HeaderCartComponent } from './e-header/header-cart/header-cart.component';
import { HeaderAuthComponent } from './e-header/header-auth/header-auth.component';
import { ECartComponent } from './e-cart/e-cart.component';
import { EProductListComponent } from './e-product-list/e-product-list.component';
import { EProductItemComponent } from './e-product-list/e-product-item/e-product-item.component';
import { EProductDetailComponent } from './e-product-detail/e-product-detail.component';
import { ELoaderComponent } from './e-loader/e-loader.component';
import { EToastComponent } from './e-toast/e-toast.component';
import { SharedModule } from '../shared/shared.module';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartListComponent } from './e-cart/cart-list/cart-list.component';
import { CartShippingComponent } from './e-cart/cart-shipping/cart-shipping.component';
import { CartPaymentComponent } from './e-cart/cart-payment/cart-payment.component';
import { CartPlaceOrderComponent } from './e-cart/cart-place-order/cart-place-order.component';



@NgModule({
  declarations: [EcommerceComponent, EHeaderComponent, EFooterComponent, HeaderCartComponent, HeaderAuthComponent, ECartComponent, EProductListComponent, EProductItemComponent, EProductDetailComponent, ELoaderComponent, EToastComponent, CartListComponent, CartShippingComponent, CartPaymentComponent, CartPlaceOrderComponent],
  imports: [
    SharedModule,
    NgbModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
