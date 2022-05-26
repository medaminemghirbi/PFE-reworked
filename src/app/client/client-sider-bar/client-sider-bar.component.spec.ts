import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSiderBarComponent } from './client-sider-bar.component';

describe('ClientSiderBarComponent', () => {
  let component: ClientSiderBarComponent;
  let fixture: ComponentFixture<ClientSiderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSiderBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSiderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
