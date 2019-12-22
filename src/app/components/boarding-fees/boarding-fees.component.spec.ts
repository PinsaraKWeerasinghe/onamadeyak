import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOARDINGFEESComponent } from './boarding-fees.component';

describe('BOARDINGFEESComponent', () => {
  let component: BOARDINGFEESComponent;
  let fixture: ComponentFixture<BOARDINGFEESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOARDINGFEESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOARDINGFEESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
