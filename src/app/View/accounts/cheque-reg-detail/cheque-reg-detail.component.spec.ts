import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeRegDetailComponent } from './cheque-reg-detail.component';

describe('ChequeRegDetailComponent', () => {
  let component: ChequeRegDetailComponent;
  let fixture: ComponentFixture<ChequeRegDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeRegDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeRegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
