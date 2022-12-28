import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher-search',
  templateUrl: './voucher-search.component.html',
  styleUrls: ['./voucher-search.component.scss']
})
export class VoucherSearchComponent implements OnInit {
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