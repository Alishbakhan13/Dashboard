import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerEffComponent } from './worker-eff.component';

describe('WorkerEffComponent', () => {
  let component: WorkerEffComponent;
  let fixture: ComponentFixture<WorkerEffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerEffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerEffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
