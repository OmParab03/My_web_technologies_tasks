import { TestBed } from '@angular/core/testing';

import { StudentsData } from './students-data';

describe('StudentsData', () => {
  let service: StudentsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
