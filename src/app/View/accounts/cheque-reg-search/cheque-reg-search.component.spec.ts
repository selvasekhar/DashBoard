import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeRegSearchComponent } from './cheque-reg-search.component';

describe('ChequeRegSearchComponent', () => {
  let component: ChequeRegSearchComponent;
  let fixture: ComponentFixture<ChequeRegSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeRegSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeRegSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
