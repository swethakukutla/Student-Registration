import { TestBed } from '@angular/core/testing';

import { CollegeregistrationserviceService } from './collegeregistrationservice.service';

describe('CollegeregistrationserviceService', () => {
  let service: CollegeregistrationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeregistrationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
