import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrunitLoginWithQrcodeComponent } from './qrunit-login-with-qrcode.component';

describe('QrunitLoginWithQrcodeComponent', () => {
  let component: QrunitLoginWithQrcodeComponent;
  let fixture: ComponentFixture<QrunitLoginWithQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrunitLoginWithQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrunitLoginWithQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
