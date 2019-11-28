import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompshipComponent } from './compship.component';

describe('CompshipComponent', () => {
  let component: CompshipComponent;
  let fixture: ComponentFixture<CompshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
