import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableshipComponent } from './tableship.component';

describe('TableshipComponent', () => {
  let component: TableshipComponent;
  let fixture: ComponentFixture<TableshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
