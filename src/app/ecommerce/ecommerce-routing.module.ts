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
        data: {title: 'eCommerce'},
        children: [
            {
                path: '',
                component: EProductListComponent,
                data: {title: 'eCommerce'}
            },
            {
                path: 'product-detail/:id',
                component: EProductDetailComponent,
                data: {title: 'eCommerce'}
            },
            {
                path: 'cart',
                component: ECartComponent,
                data: {title: 'eCommerce'},
                children: [
                    {
                        path: '',
                        redirectTo: 'list'
                    },
                    {
                        path: 'list',
                        component: CartListComponent,
                        data: {title: 'eCommerce'}
                    },
                    {
                        path: 'shipping',
                        component: CartShippingComponent,
                        data: {title: 'eCommerce'}
                    },
                    {
                        path: 'payment',
                        component: CartPaymentComponent,
                        data: {title: 'eCommerce'}
                    },
                    {
                        path: 'place-order',
                        component: CartPlaceOrderComponent,
                        data: {title: 'eCommerce'}
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