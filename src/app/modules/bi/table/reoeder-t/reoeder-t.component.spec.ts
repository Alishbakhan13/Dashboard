import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReoederTComponent } from './reoeder-t.component';

describe('ReoederTComponent', () => {
  let component: ReoederTComponent;
  let fixture: ComponentFixture<ReoederTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReoederTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReoederTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
