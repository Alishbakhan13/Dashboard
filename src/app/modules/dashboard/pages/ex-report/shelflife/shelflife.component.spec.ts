import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelflifeComponent } from './shelflife.component';

describe('ShelflifeComponent', () => {
  let component: ShelflifeComponent;
  let fixture: ComponentFixture<ShelflifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelflifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelflifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
