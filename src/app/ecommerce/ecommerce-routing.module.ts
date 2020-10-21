import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './e-cart/cart-list/cart-list.component';
import { CartPaymentComponent } from './e-cart/cart-payment/cart-payment.component';
import { CartPlaceOrderComponent } from './e-cart/cart-place-order/cart-place-order.component';
import { CartShippingComponent } from './e-cart/cart-shipping/cart-shipping.component';
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
                component: ECartComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'list'
                    },
                    {
                        path: 'list',
                        component: CartListComponent
                    },
                    {
                        path: 'shipping',
                        component: CartShippingComponent
                    },
                    {
                        path: 'payment',
                        component: CartPaymentComponent
                    },
                    {
                        path: 'place-order',
                        component: CartPlaceOrderComponent
                    }
                ]
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