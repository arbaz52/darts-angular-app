import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDialogComponent } from './temp-dialog.component';

describe('TempDialogComponent', () => {
  let component: TempDialogComponent;
  let fixture: ComponentFixture<TempDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
