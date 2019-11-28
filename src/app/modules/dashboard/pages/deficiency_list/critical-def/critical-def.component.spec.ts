import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalDefComponent } from './critical-def.component';

describe('CriticalDefComponent', () => {
  let component: CriticalDefComponent;
  let fixture: ComponentFixture<CriticalDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
