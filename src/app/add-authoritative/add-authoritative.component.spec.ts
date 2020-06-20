import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthoritativeComponent } from './add-authoritative.component';

describe('AddAuthoritativeComponent', () => {
  let component: AddAuthoritativeComponent;
  let fixture: ComponentFixture<AddAuthoritativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuthoritativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthoritativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
