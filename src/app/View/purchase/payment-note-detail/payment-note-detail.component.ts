import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-note-detail',
  templateUrl: './payment-note-detail.component.html',
  styleUrls: ['./payment-note-detail.component.scss']
})
export class PaymentNoteDetailComponent implements OnInit {
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
