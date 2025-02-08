import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullregisterComponent } from './fullregister.component';

describe('FullregisterComponent', () => {
  let component: FullregisterComponent;
  let fixture: ComponentFixture<FullregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
