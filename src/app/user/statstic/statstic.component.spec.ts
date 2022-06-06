import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsticComponent } from './statstic.component';

describe('StatsticComponent', () => {
  let component: StatsticComponent;
  let fixture: ComponentFixture<StatsticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
