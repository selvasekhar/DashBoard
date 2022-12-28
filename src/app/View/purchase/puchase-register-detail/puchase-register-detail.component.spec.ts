import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuchaseRegisterDetailComponent } from './puchase-register-detail.component';

describe('PuchaseRegisterDetailComponent', () => {
  let component: PuchaseRegisterDetailComponent;
  let fixture: ComponentFixture<PuchaseRegisterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuchaseRegisterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuchaseRegisterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
