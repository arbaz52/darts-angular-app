import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrunitDetailsComponent } from './qrunit-details.component';

describe('QrunitDetailsComponent', () => {
  let component: QrunitDetailsComponent;
  let fixture: ComponentFixture<QrunitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrunitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrunitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
