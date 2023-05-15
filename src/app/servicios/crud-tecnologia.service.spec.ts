import { TestBed } from '@angular/core/testing';

import { CRUDTecnologiaService } from './crud-tecnologia.service';

describe('CRUDTecnologiaService', () => {
  let service: CRUDTecnologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDTecnologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
