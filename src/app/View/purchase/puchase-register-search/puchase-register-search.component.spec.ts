import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuchaseRegisterSearchComponent } from './puchase-register-search.component';

describe('PuchaseRegisterSearchComponent', () => {
  let component: PuchaseRegisterSearchComponent;
  let fixture: ComponentFixture<PuchaseRegisterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuchaseRegisterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuchaseRegisterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
