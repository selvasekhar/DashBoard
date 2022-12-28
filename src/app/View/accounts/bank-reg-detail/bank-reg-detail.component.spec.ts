import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRegDetailComponent } from './bank-reg-detail.component';

describe('BankRegDetailComponent', () => {
  let component: BankRegDetailComponent;
  let fixture: ComponentFixture<BankRegDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRegDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
