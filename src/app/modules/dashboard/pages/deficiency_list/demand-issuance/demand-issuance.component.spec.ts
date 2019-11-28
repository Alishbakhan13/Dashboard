import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandIssuanceComponent } from './demand-issuance.component';

describe('DemandIssuanceComponent', () => {
  let component: DemandIssuanceComponent;
  let fixture: ComponentFixture<DemandIssuanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandIssuanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
