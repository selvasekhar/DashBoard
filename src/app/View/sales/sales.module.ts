import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SaleMenuComponent } from './sale-menu/sale-menu.component';

@NgModule({
  declarations: [SaleMenuComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
  ]
})
export class SalesModule { }
