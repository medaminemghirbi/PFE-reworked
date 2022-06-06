import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulatedMissionsClientComponent } from './postulated-missions-client.component';

describe('PostulatedMissionsClientComponent', () => {
  let component: PostulatedMissionsClientComponent;
  let fixture: ComponentFixture<PostulatedMissionsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulatedMissionsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulatedMissionsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
