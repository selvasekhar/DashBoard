import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuchaseItemConfigComponent } from './puchase-item-config.component';

describe('PuchaseItemConfigComponent', () => {
  let component: PuchaseItemConfigComponent;
  let fixture: ComponentFixture<PuchaseItemConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuchaseItemConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuchaseItemConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
