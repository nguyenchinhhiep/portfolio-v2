import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECartComponent } from './e-cart/e-cart.component';
import { EProductDetailComponent } from './e-product-detail/e-product-detail.component';
import { EProductListComponent } from './e-product-list/e-product-list.component';
import { EcommerceComponent } from './ecommerce.component';

const routes: Routes = [
    {
        path: '',
        component: EcommerceComponent,
        children: [
            {
                path: '',
                component: EProductListComponent
            },
            {
                path: 'product-detail/:id',
                component: EProductDetailComponent
            },
            {
                path: 'cart',
                component: ECartComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcommerceRoutingModule {

}