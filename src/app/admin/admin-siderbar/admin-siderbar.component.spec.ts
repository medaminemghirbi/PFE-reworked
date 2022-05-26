import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiderbarComponent } from './admin-siderbar.component';

describe('AdminSiderbarComponent', () => {
  let component: AdminSiderbarComponent;
  let fixture: ComponentFixture<AdminSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSiderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
