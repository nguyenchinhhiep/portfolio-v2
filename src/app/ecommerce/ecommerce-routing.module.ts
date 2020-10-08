import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECartComponent } from './e-cart/e-cart.component';
import { EcommerceComponent } from './ecommerce.component';

const routes: Routes = [
    {
        path: '',
        component: EcommerceComponent,
        children: [
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