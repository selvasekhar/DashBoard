import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNoteSearchComponent } from './payment-note-search.component';

describe('PaymentNoteSearchComponent', () => {
  let component: PaymentNoteSearchComponent;
  let fixture: ComponentFixture<PaymentNoteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentNoteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentNoteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
