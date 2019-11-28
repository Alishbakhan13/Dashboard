import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyReportComponent } from './faulty-report.component';

describe('FaultyReportComponent', () => {
  let component: FaultyReportComponent;
  let fixture: ComponentFixture<FaultyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
