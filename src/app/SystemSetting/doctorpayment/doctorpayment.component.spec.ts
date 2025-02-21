import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpaymentComponent } from './doctorpayment.component';

describe('DoctorpaymentComponent', () => {
  let component: DoctorpaymentComponent;
  let fixture: ComponentFixture<DoctorpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorpaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
