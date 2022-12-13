import { TestBed } from '@angular/core/testing';

import { ImobiliariasService } from './imobiliarias.service';

describe('ImobiliariasService', () => {
  let service: ImobiliariasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImobiliariasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
