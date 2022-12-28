import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgersDetailComponent } from './ledgers-detail.component';

describe('LedgersDetailComponent', () => {
  let component: LedgersDetailComponent;
  let fixture: ComponentFixture<LedgersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
