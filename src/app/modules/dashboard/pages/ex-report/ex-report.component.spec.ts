import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExReportComponent } from './ex-report.component';

describe('ExReportComponent', () => {
  let component: ExReportComponent;
  let fixture: ComponentFixture<ExReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
