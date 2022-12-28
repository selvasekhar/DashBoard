import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNoteDetailComponent } from './payment-note-detail.component';

describe('PaymentNoteDetailComponent', () => {
  let component: PaymentNoteDetailComponent;
  let fixture: ComponentFixture<PaymentNoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentNoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentNoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
