import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetaDataComponent } from './add-meta-data.component';

describe('AddMetaDataComponent', () => {
  let component: AddMetaDataComponent;
  let fixture: ComponentFixture<AddMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMetaDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
