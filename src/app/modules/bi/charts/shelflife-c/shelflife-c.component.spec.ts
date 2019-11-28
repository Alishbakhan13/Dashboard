import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelflifeCComponent } from './shelflife-c.component';

describe('ShelflifeCComponent', () => {
  let component: ShelflifeCComponent;
  let fixture: ComponentFixture<ShelflifeCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelflifeCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelflifeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
