import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuterFreelancerComponent } from './descuter-freelancer.component';

describe('DescuterFreelancerComponent', () => {
  let component: DescuterFreelancerComponent;
  let fixture: ComponentFixture<DescuterFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuterFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuterFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
