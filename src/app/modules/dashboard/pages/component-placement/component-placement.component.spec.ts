import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPlacementComponent } from './component-placement.component';

describe('ComponentPlacementComponent', () => {
  let component: ComponentPlacementComponent;
  let fixture: ComponentFixture<ComponentPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
