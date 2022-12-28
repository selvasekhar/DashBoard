import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

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
  closeResult: string;
  open(content) {
    this.modalService.open(content);
  }
}
