import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseMenuComponent } from './purchase-menu/purchase-menu.component';
import { PurchaseInvoiceSearchComponent } from './purchase-invoice-search/purchase-invoice-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseInvoiceDetailComponent } from './purchase-invoice-detail/purchase-invoice-detail.component';
import { PaymentNoteSearchComponent } from './payment-note-search/payment-note-search.component';
import { PaymentNoteDetailComponent } from './payment-note-detail/payment-note-detail.component';
import { AccountsModule } from '../accounts/accounts.module';
import { PuchaseRegisterSearchComponent } from './puchase-register-search/puchase-register-search.component';
import { PuchaseRegisterDetailComponent } from './puchase-register-detail/puchase-register-detail.component';
import { PuchaseItemConfigComponent } from './puchase-item-config/puchase-item-config.component';

@NgModule({
  declarations: [PurchaseMenuComponent,  PurchaseInvoiceSearchComponent, PurchaseInvoiceDetailComponent, PaymentNoteSearchComponent, PaymentNoteDetailComponent, PuchaseRegisterSearchComponent, PuchaseRegisterDetailComponent, PuchaseItemConfigComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    NgbModule,
    AccountsModule
  ]
})
export class PurchaseModule { }
