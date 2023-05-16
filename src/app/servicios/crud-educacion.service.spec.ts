import { TestBed } from '@angular/core/testing';

import { CRUDEducacionService } from './crud-educacion.service';

describe('CRUDEducacionService', () => {
  let service: CRUDEducacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDEducacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
