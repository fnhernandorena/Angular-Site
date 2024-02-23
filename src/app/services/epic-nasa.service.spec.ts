import { TestBed } from '@angular/core/testing';

import { EpicNasaService } from './epic-nasa.service';

describe('EpicNasaService', () => {
  let service: EpicNasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpicNasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
