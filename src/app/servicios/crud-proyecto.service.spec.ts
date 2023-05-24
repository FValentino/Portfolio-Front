import { TestBed } from '@angular/core/testing';

import { CRUDProyectoService } from './crud-proyecto.service';

describe('CRUDProyectoService', () => {
  let service: CRUDProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
