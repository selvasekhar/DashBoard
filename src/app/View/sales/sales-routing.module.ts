import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleMenuComponent } from './sale-menu/sale-menu.component';

const routes: Routes = [
  { path: '', component: SaleMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
