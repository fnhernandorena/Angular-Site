import { TestBed } from '@angular/core/testing';

import { DayImageService } from './day-image.service';

describe('DayImageService', () => {
  let service: DayImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
