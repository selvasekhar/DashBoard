import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';

const routes: Routes = [
  {
    path: '',     
    component: ViewComponent,
    children: [
      { path: '', redirectTo: '/view/admin', pathMatch: 'full' },
      { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
      { path: 'account', loadChildren: () => import(`./accounts/accounts.module`).then(m => m.AccountsModule) },
      { path: 'sale', loadChildren: () => import(`./sales/sales.module`).then(m => m.SalesModule) },
      { path: 'purchase', loadChildren: () => import(`./purchase/purchase.module`).then(m => m.PurchaseModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
