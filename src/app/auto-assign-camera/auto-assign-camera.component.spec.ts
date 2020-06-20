import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAssignCameraComponent } from './auto-assign-camera.component';

describe('AutoAssignCameraComponent', () => {
  let component: AutoAssignCameraComponent;
  let fixture: ComponentFixture<AutoAssignCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoAssignCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoAssignCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
