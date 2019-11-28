import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaltedactComponent } from './haltedact.component';

describe('HaltedactComponent', () => {
  let component: HaltedactComponent;
  let fixture: ComponentFixture<HaltedactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaltedactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaltedactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
