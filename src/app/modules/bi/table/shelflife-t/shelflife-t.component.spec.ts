import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelflifeTComponent } from './shelflife-t.component';

describe('ShelflifeTComponent', () => {
  let component: ShelflifeTComponent;
  let fixture: ComponentFixture<ShelflifeTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelflifeTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelflifeTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
