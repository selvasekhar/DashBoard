import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheque-reg-search',
  templateUrl: './cheque-reg-search.component.html',
  styleUrls: ['./cheque-reg-search.component.scss']
})
export class ChequeRegSearchComponent implements OnInit {
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
