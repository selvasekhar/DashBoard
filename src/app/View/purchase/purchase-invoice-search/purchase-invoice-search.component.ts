import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-invoice-search',
  templateUrl: './purchase-invoice-search.component.html',
  styleUrls: ['./purchase-invoice-search.component.scss']
})
export class PurchaseInvoiceSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchPanel: boolean = false
  page = 1;
  openSearchPanel() {
    this.searchPanel = !this.searchPanel
  }
  closeSearchPanel(){
    this.searchPanel=false;
  }
}
