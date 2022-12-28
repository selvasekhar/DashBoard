import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRegSearchComponent } from './bank-reg-search.component';

describe('BankRegSearchComponent', () => {
  let component: BankRegSearchComponent;
  let fixture: ComponentFixture<BankRegSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRegSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRegSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
