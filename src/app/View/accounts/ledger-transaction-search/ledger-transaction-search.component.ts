import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ledger-transaction-search',
  templateUrl: './ledger-transaction-search.component.html',
  styleUrls: ['./ledger-transaction-search.component.scss']
})
export class LedgerTransactionSearchComponent implements OnInit {

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
