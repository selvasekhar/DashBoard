import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grade-pricing',
  templateUrl: './grade-pricing.component.html',
  styleUrls: ['./grade-pricing.component.scss']
})
export class GradePricingComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  closeResult: string;
  open(content) {
    this.modalService.open(content);
  }
}
