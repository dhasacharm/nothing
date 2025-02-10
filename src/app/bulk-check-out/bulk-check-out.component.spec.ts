import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCheckOutComponent } from './bulk-check-out.component';

describe('BulkCheckOutComponent', () => {
  let component: BulkCheckOutComponent;
  let fixture: ComponentFixture<BulkCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulkCheckOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
