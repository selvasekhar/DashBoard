import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBranchBankComponent } from './company-branch-bank.component';

describe('CompanyBranchBankComponent', () => {
  let component: CompanyBranchBankComponent;
  let fixture: ComponentFixture<CompanyBranchBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBranchBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBranchBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
