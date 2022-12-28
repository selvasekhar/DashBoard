import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherSearchComponent } from './voucher-search.component';

describe('VoucherSearchComponent', () => {
  let component: VoucherSearchComponent;
  let fixture: ComponentFixture<VoucherSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
