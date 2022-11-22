import { TestBed } from '@angular/core/testing';

import { ContratoImobiliariasProprietariosService } from './contrato-imobiliarias-proprietarios.service';

describe('ContratoImobiliariasProprietariosService', () => {
  let service: ContratoImobiliariasProprietariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoImobiliariasProprietariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
