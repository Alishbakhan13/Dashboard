import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueCComponent } from './revenue-c.component';

describe('RevenueCComponent', () => {
  let component: RevenueCComponent;
  let fixture: ComponentFixture<RevenueCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
