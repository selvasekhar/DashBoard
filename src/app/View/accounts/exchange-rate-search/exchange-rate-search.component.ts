import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exchange-rate-search',
  templateUrl: './exchange-rate-search.component.html',
  styleUrls: ['./exchange-rate-search.component.scss']
})
export class ExchangeRateSearchComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

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
