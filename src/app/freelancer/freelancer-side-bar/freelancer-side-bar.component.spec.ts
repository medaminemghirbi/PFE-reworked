import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerSideBarComponent } from './freelancer-side-bar.component';

describe('FreelancerSideBarComponent', () => {
  let component: FreelancerSideBarComponent;
  let fixture: ComponentFixture<FreelancerSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
