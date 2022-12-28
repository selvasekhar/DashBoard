import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInvoiceSearchComponent } from './purchase-invoice-search.component';

describe('PurchaseInvoiceSearchComponent', () => {
  let component: PurchaseInvoiceSearchComponent;
  let fixture: ComponentFixture<PurchaseInvoiceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseInvoiceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseInvoiceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
