import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickregistrationComponent } from './quickregistration.component';

describe('QuickregistrationComponent', () => {
  let component: QuickregistrationComponent;
  let fixture: ComponentFixture<QuickregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickregistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
