import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRegDetailComponent } from './cash-reg-detail.component';

describe('CashRegDetailComponent', () => {
  let component: CashRegDetailComponent;
  let fixture: ComponentFixture<CashRegDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRegDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
