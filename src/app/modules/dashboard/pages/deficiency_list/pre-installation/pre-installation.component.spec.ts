import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInstallationComponent } from './pre-installation.component';

describe('PreInstallationComponent', () => {
  let component: PreInstallationComponent;
  let fixture: ComponentFixture<PreInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
