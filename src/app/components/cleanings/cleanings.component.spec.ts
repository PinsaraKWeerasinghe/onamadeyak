import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLEANINGSComponent } from './cleanings.component';

describe('CLEANINGSComponent', () => {
  let component: CLEANINGSComponent;
  let fixture: ComponentFixture<CLEANINGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLEANINGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLEANINGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
