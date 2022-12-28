import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { CompanyApprovalComponent } from './company-approval/company-approval.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { VendorSearchComponent } from './vendor-search/vendor-search.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { CompanyBranchBankComponent } from './company-branch-bank/company-branch-bank.component';
import { VoucherSearchComponent } from './voucher-search/voucher-search.component';
import { VoucherDetailComponent } from './voucher-detail/voucher-detail.component';
import { LedgerTransactionSearchComponent } from './ledger-transaction-search/ledger-transaction-search.component';
import { GroupComponent } from './group/group.component';
import { TreeModule } from 'angular-tree-component';
import { LedgersComponent } from './ledgers/ledgers.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { LedgersDetailComponent } from './ledgers-detail/ledgers-detail.component';
import { VoucherAccountComponent } from './voucher-account/voucher-account.component';
import { TaxSearchComponent } from './tax-search/tax-search.component';
import { TaxDetailComponent } from './tax-detail/tax-detail.component';
import { ExchangeRateSearchComponent } from './exchange-rate-search/exchange-rate-search.component';
import { ExchangeRateDetailComponent } from './exchange-rate-detail/exchange-rate-detail.component';
import { ChequeRegSearchComponent } from './cheque-reg-search/cheque-reg-search.component';
import { ChequeRegDetailComponent } from './cheque-reg-detail/cheque-reg-detail.component';
import { CashRegSearchComponent } from './cash-reg-search/cash-reg-search.component';
import { CashRegDetailComponent } from './cash-reg-detail/cash-reg-detail.component';
import { BankRegSearchComponent } from './bank-reg-search/bank-reg-search.component';
import { BankRegDetailComponent } from './bank-reg-detail/bank-reg-detail.component';

@NgModule({
  declarations: [AccountMenuComponent, CompanyApprovalComponent, CompanyDetailComponent, CompanySearchComponent, VendorSearchComponent, VendorDetailComponent, CompanyBranchBankComponent, VoucherSearchComponent, VoucherDetailComponent, LedgerTransactionSearchComponent, GroupComponent, LedgersComponent, GroupDetailComponent, LedgersDetailComponent, VoucherAccountComponent, TaxSearchComponent, TaxDetailComponent, ExchangeRateSearchComponent, ExchangeRateDetailComponent, ChequeRegSearchComponent, ChequeRegDetailComponent, CashRegSearchComponent, CashRegDetailComponent, BankRegSearchComponent, BankRegDetailComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    NgbModule,
    TreeModule.forRoot(), 
  ],
  exports:[
    VendorSearchComponent
  ]
})
export class AccountsModule { }
