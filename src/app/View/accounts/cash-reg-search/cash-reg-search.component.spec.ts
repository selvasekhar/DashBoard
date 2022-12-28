import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRegSearchComponent } from './cash-reg-search.component';

describe('CashRegSearchComponent', () => {
  let component: CashRegSearchComponent;
  let fixture: ComponentFixture<CashRegSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRegSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRegSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
