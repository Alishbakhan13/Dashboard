import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyCComponent } from './faulty-c.component';

describe('FaultyCComponent', () => {
  let component: FaultyCComponent;
  let fixture: ComponentFixture<FaultyCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultyCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
