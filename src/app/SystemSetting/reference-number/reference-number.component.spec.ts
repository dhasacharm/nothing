import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceNumberComponent } from './reference-number.component';

describe('ReferenceNumberComponent', () => {
  let component: ReferenceNumberComponent;
  let fixture: ComponentFixture<ReferenceNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferenceNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
