import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontOfficeDashboardComponent } from './front-office-dashboard.component';

describe('FrontOfficeDashboardComponent', () => {
  let component: FrontOfficeDashboardComponent;
  let fixture: ComponentFixture<FrontOfficeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontOfficeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontOfficeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
