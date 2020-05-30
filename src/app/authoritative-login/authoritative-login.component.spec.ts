import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoritativeLoginComponent } from './authoritative-login.component';

describe('AuthoritativeLoginComponent', () => {
  let component: AuthoritativeLoginComponent;
  let fixture: ComponentFixture<AuthoritativeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoritativeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoritativeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
