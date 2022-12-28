import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-search',
  templateUrl: './audit-search.component.html',
  styleUrls: ['./audit-search.component.scss']
})
export class AuditSearchComponent implements OnInit {

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
