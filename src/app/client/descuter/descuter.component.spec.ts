import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuterComponent } from './descuter.component';

describe('DescuterComponent', () => {
  let component: DescuterComponent;
  let fixture: ComponentFixture<DescuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
