import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPECIALREQUESTSComponent } from './special-requests.component';

describe('SPECIALREQUESTSComponent', () => {
  let component: SPECIALREQUESTSComponent;
  let fixture: ComponentFixture<SPECIALREQUESTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPECIALREQUESTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPECIALREQUESTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
