import { TestBed } from '@angular/core/testing';

import { ContratosImobiliariasClientesService } from './contratos-imobiliarias-clientes.service';

describe('ContratosImobiliariasClientesService', () => {
  let service: ContratosImobiliariasClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratosImobiliariasClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
