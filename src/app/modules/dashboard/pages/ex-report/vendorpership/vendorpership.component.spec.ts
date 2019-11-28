import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpershipComponent } from './vendorpership.component';

describe('VendorpershipComponent', () => {
  let component: VendorpershipComponent;
  let fixture: ComponentFixture<VendorpershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorpershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
