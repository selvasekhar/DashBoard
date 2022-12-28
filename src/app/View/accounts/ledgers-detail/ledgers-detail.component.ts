import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ledgers-detail',
  templateUrl: './ledgers-detail.component.html',
  styleUrls: ['./ledgers-detail.component.scss']
})
export class LedgersDetailComponent implements OnInit {


  closeResult: string;
  open(content) {
    this.modalService.open(content);
  }
  open1(content1) {
    this.modalService.open(content1);
  }
  open2(content2) {
    this.modalService.open(content2);
  }
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

}
