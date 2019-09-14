import { TestBed } from '@angular/core/testing';

import { ShowdateService } from './showdate.service';

describe('ShowdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowdateService = TestBed.get(ShowdateService);
    expect(service).toBeTruthy();
  });
});
