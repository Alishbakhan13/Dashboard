import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnserviceableComponent } from './unserviceable.component';

describe('UnserviceableComponent', () => {
  let component: UnserviceableComponent;
  let fixture: ComponentFixture<UnserviceableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnserviceableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnserviceableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
