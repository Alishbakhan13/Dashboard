import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefReportComponent } from './def-report.component';

describe('DefReportComponent', () => {
  let component: DefReportComponent;
  let fixture: ComponentFixture<DefReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
