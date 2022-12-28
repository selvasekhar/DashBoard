import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-config-detail',
  templateUrl: './config-detail.component.html',
  styleUrls: ['./config-detail.component.scss']
})
export class ConfigDetailComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  ngOnInit(){}
  closeResult: string;
  open(content) {
    this.modalService.open(content);
  }
  open1(content1) {
    this.modalService.open(content1);
  }
  open2(content2){
    this.modalService.open(content2);
  }

 

}
