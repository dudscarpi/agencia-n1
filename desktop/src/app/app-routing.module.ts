import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// localhost:3001 -> localhost:3001/product
// localhost:3000 -> localhost:3000/frete

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'product',
    loadChildren: () => import('./store/product/product-routing.module').then(m => m.ProductRoutingModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }