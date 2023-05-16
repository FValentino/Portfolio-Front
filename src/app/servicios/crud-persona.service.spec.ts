import { TestBed } from '@angular/core/testing';

import { CRUDPersonaService } from './crud-persona.service';

describe('CRUDPersonaService', () => {
  let service: CRUDPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
