import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficiencyListComponent } from './deficiency-list.component';

describe('DeficiencyListComponent', () => {
  let component: DeficiencyListComponent;
  let fixture: ComponentFixture<DeficiencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficiencyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficiencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
