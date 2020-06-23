import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLiveFeedComponent } from './view-live-feed.component';

describe('ViewLiveFeedComponent', () => {
  let component: ViewLiveFeedComponent;
  let fixture: ComponentFixture<ViewLiveFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLiveFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLiveFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
