import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratecontratclientComponent } from './generatecontratclient.component';

describe('GeneratecontratclientComponent', () => {
  let component: GeneratecontratclientComponent;
  let fixture: ComponentFixture<GeneratecontratclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratecontratclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratecontratclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
