import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoritativeHomeComponent } from './authoritative-home.component';

describe('AuthoritativeHomeComponent', () => {
  let component: AuthoritativeHomeComponent;
  let fixture: ComponentFixture<AuthoritativeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoritativeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoritativeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
