import { TestBed } from '@angular/core/testing';

import { PatientregisteredService } from './patientregistered.service';

describe('PatientregisteredService', () => {
  let service: PatientregisteredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientregisteredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
