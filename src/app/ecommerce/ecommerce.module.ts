import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { EHeaderComponent } from './e-header/e-header.component';
import { EFooterComponent } from './e-footer/e-footer.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { HeaderCartComponent } from './e-header/header-cart/header-cart.component';
import { HeaderAuthComponent } from './e-header/header-auth/header-auth.component';



@NgModule({
  declarations: [EcommerceComponent, EHeaderComponent, EFooterComponent, HeaderCartComponent, HeaderAuthComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
