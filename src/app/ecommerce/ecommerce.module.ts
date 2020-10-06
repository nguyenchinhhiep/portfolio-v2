import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { EHeaderComponent } from './e-header/e-header.component';
import { EFooterComponent } from './e-footer/e-footer.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';



@NgModule({
  declarations: [EcommerceComponent, EHeaderComponent, EFooterComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
