import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMissionsClientComponent } from './active-missions-client.component';

describe('ActiveMissionsClientComponent', () => {
  let component: ActiveMissionsClientComponent;
  let fixture: ComponentFixture<ActiveMissionsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveMissionsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveMissionsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
