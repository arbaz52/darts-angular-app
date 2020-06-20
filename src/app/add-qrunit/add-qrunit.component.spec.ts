import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQrunitComponent } from './add-qrunit.component';

describe('AddQrunitComponent', () => {
  let component: AddQrunitComponent;
  let fixture: ComponentFixture<AddQrunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQrunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQrunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
