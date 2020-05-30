import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuspectComponent } from './view-suspect.component';

describe('ViewSuspectComponent', () => {
  let component: ViewSuspectComponent;
  let fixture: ComponentFixture<ViewSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
