import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustPreprocessingComponent } from './adjust-preprocessing.component';

describe('AdjustPreprocessingComponent', () => {
  let component: AdjustPreprocessingComponent;
  let fixture: ComponentFixture<AdjustPreprocessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustPreprocessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustPreprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
