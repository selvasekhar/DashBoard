import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateSearchComponent } from './exchange-rate-search.component';

describe('ExchangeRateSearchComponent', () => {
  let component: ExchangeRateSearchComponent;
  let fixture: ComponentFixture<ExchangeRateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
