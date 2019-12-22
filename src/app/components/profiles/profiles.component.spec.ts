import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROFILESComponent } from './profiles.component';

describe('PROFILESComponent', () => {
  let component: PROFILESComponent;
  let fixture: ComponentFixture<PROFILESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROFILESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROFILESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
