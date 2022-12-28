import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-reg-search',
  templateUrl: './cash-reg-search.component.html',
  styleUrls: ['./cash-reg-search.component.scss']
})
export class CashRegSearchComponent implements OnInit {
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
