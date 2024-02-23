import { TestBed } from '@angular/core/testing';

import { MarsImagesService } from './mars-images.service';

describe('MarsImagesService', () => {
  let service: MarsImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
