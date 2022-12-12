import { TestBed } from '@angular/core/testing';

import { ContratoProprietarioService } from './contrato-proprietario.service';

describe('ContratoProprietarioService', () => {
  let service: ContratoProprietarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoProprietarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
