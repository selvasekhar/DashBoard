import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherAccountComponent } from './voucher-account.component';

describe('VoucherAccountComponent', () => {
  let component: VoucherAccountComponent;
  let fixture: ComponentFixture<VoucherAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
