import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puchase-register-search',
  templateUrl: './puchase-register-search.component.html',
  styleUrls: ['./puchase-register-search.component.scss']
})
export class PuchaseRegisterSearchComponent implements OnInit {

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
