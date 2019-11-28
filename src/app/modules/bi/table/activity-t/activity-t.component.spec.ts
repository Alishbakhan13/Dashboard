import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTComponent } from './activity-t.component';

describe('ActivityTComponent', () => {
  let component: ActivityTComponent;
  let fixture: ComponentFixture<ActivityTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
