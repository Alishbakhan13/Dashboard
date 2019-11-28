import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTComponent } from './vendor-t.component';

describe('VendorTComponent', () => {
  let component: VendorTComponent;
  let fixture: ComponentFixture<VendorTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
