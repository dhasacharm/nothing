import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewHomeComponent } from './login-view-home.component';

describe('LoginViewHomeComponent', () => {
  let component: LoginViewHomeComponent;
  let fixture: ComponentFixture<LoginViewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginViewHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
