import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderCComponent } from './reorder-c.component';

describe('ReorderCComponent', () => {
  let component: ReorderCComponent;
  let fixture: ComponentFixture<ReorderCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
