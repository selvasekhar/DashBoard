import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-note-search',
  templateUrl: './payment-note-search.component.html',
  styleUrls: ['./payment-note-search.component.scss']
})
export class PaymentNoteSearchComponent implements OnInit {
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
