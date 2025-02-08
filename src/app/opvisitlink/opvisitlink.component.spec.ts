import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpvisitlinkComponent } from './opvisitlink.component';

describe('OpvisitlinkComponent', () => {
  let component: OpvisitlinkComponent;
  let fixture: ComponentFixture<OpvisitlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpvisitlinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpvisitlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
