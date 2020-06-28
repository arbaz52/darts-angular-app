import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipperComponent } from './chipper.component';

describe('ChipperComponent', () => {
  let component: ChipperComponent;
  let fixture: ComponentFixture<ChipperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
