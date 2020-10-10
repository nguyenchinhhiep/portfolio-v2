import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { EHeaderComponent } from './e-header/e-header.component';
import { EFooterComponent } from './e-footer/e-footer.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { HeaderCartComponent } from './e-header/header-cart/header-cart.component';
import { HeaderAuthComponent } from './e-header/header-auth/header-auth.component';
import { NgbModalModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { ECartComponent } from './e-cart/e-cart.component';
import { EProductListComponent } from './e-product-list/e-product-list.component';
import { EProductItemComponent } from './e-product-list/e-product-item/e-product-item.component';
import { EProductDetailComponent } from './e-product-detail/e-product-detail.component';



@NgModule({
  declarations: [EcommerceComponent, EHeaderComponent, EFooterComponent, HeaderCartComponent, HeaderAuthComponent, ECartComponent, EProductListComponent, EProductItemComponent, EProductDetailComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    NgbNavModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
