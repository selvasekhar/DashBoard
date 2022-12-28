import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-voucher-detail',
  templateUrl: './voucher-detail.component.html',
  styleUrls: ['./voucher-detail.component.scss']
})
export class VoucherDetailComponent implements OnInit {
  ngOnInit() {
  }
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

}
