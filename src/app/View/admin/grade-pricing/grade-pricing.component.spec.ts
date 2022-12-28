import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradePricingComponent } from './grade-pricing.component';

describe('GradePricingComponent', () => {
  let component: GradePricingComponent;
  let fixture: ComponentFixture<GradePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
