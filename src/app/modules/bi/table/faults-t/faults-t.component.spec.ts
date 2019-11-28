import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultsTComponent } from './faults-t.component';

describe('FaultsTComponent', () => {
  let component: FaultsTComponent;
  let fixture: ComponentFixture<FaultsTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultsTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
