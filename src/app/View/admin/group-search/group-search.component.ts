import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.scss']
})
export class GroupSearchComponent implements OnInit {

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
