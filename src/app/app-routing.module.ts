import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {
      path: '',
      redirectTo: '/ecommerce',
      pathMatch: 'full'
   },
   {
      path: 'portfolio',
      loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
   },
   {
      path: 'chat-app',
      loadChildren: () => import('./chat-app/chat-app.module').then(m => m.ChatAppModule)
   },
   {
      path: 'ecommerce',
      loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
   },
   {
      path: '**',
      redirectTo: '/portfolio',
      pathMatch: 'full'
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
