import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseMenuComponent } from './purchase-menu/purchase-menu.component';
import { PurchaseInvoiceSearchComponent } from './purchase-invoice-search/purchase-invoice-search.component';
import { PurchaseInvoiceDetailComponent } from './purchase-invoice-detail/purchase-invoice-detail.component';
import { PaymentNoteSearchComponent } from './payment-note-search/payment-note-search.component';
import { PaymentNoteDetailComponent } from './payment-note-detail/payment-note-detail.component';
import { PuchaseRegisterSearchComponent } from './puchase-register-search/puchase-register-search.component';
import { PuchaseRegisterDetailComponent } from './puchase-register-detail/puchase-register-detail.component';
import { PuchaseItemConfigComponent } from './puchase-item-config/puchase-item-config.component';

const routes: Routes = [
  { path: '', component: PurchaseMenuComponent },
  { path: 'PurchaseInvoiceSearch', component: PurchaseInvoiceSearchComponent },
  { path: 'PurchaseInvoiceDetail', component: PurchaseInvoiceDetailComponent },
  { path: 'PaymentNoteSearch', component: PaymentNoteSearchComponent },
  { path: 'PaymentNoteDetail', component: PaymentNoteDetailComponent },
  { path: 'PuchaseRegister', component: PuchaseRegisterSearchComponent },
  { path: 'PuchaseRegisterDetail', component: PuchaseRegisterDetailComponent },
  { path: 'PuchaseItemConfig', component: PuchaseItemConfigComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
