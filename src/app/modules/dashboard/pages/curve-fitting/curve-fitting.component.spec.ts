import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveFittingComponent } from './curve-fitting.component';

describe('CurveFittingComponent', () => {
  let component: CurveFittingComponent;
  let fixture: ComponentFixture<CurveFittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveFittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveFittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
