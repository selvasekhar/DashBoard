import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-purchase-invoice-detail',
  templateUrl: './purchase-invoice-detail.component.html',
  styleUrls: ['./purchase-invoice-detail.component.scss']
})
export class PurchaseInvoiceDetailComponent implements OnInit {


  ngOnInit() {
  }
  closeResult: string;
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  open1(content1) {
    this.modalService.open(content1);
  }
  open2(content2) {
    this.modalService.open(content2,{size:"lg"});
  }
  constructor(private modalService: NgbModal) { }

}
