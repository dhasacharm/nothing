import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontofficeRegisterComponent } from './frontoffice-register.component';

describe('FrontofficeRegisterComponent', () => {
  let component: FrontofficeRegisterComponent;
  let fixture: ComponentFixture<FrontofficeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontofficeRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontofficeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
