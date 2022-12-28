import { Component, OnInit } from '@angular/core';
export interface Data {
  id: string;
}
@Component({
  selector: 'app-email-tracking',
  templateUrl: './email-tracking.component.html',
  styleUrls: ['./email-tracking.component.scss']
})
export class EmailTrackingComponent implements OnInit {

  constructor() { }
  datas: Data[] = [
    {id:"1"},
    {id:"2"},
    {id:"3"},
    {id:"4"},
  ];

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
