import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpregisterComponent } from './opregister.component';

describe('OpregisterComponent', () => {
  let component: OpregisterComponent;
  let fixture: ComponentFixture<OpregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
