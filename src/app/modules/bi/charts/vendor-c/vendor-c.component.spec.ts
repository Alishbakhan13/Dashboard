import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCComponent } from './vendor-c.component';

describe('VendorCComponent', () => {
  let component: VendorCComponent;
  let fixture: ComponentFixture<VendorCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
