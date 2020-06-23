import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsOnlyComponent } from './tests-only.component';

describe('TestsOnlyComponent', () => {
  let component: TestsOnlyComponent;
  let fixture: ComponentFixture<TestsOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
