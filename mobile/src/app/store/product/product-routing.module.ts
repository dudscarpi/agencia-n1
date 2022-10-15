import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [

  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }