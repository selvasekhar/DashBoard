import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {


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
  public imagePath;
  imgURL: any;
  public message: string;
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}