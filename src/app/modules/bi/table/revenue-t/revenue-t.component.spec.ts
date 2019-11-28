import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueTComponent } from './revenue-t.component';

describe('RevenueTComponent', () => {
  let component: RevenueTComponent;
  let fixture: ComponentFixture<RevenueTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
