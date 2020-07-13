import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWithSearchComponent } from './map-with-search.component';

describe('MapWithSearchComponent', () => {
  let component: MapWithSearchComponent;
  let fixture: ComponentFixture<MapWithSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWithSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
