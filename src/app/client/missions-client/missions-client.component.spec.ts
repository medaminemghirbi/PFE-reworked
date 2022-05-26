import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsClientComponent } from './missions-client.component';

describe('MissionsClientComponent', () => {
  let component: MissionsClientComponent;
  let fixture: ComponentFixture<MissionsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
