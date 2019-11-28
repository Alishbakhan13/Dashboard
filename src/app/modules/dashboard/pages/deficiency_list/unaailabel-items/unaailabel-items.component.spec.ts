import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaailabelItemsComponent } from './unaailabel-items.component';

describe('UnaailabelItemsComponent', () => {
  let component: UnaailabelItemsComponent;
  let fixture: ComponentFixture<UnaailabelItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnaailabelItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaailabelItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
