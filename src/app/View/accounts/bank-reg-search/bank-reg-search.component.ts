import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-reg-search',
  templateUrl: './bank-reg-search.component.html',
  styleUrls: ['./bank-reg-search.component.scss']
})
export class BankRegSearchComponent implements OnInit {

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
