import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }
  closeResult: string;
  open(content) {
    this.modalService.open(content);
  }
}
