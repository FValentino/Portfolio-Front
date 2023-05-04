import { TestBed } from '@angular/core/testing';

import { ExtraerDatosService } from './extraer-datos.service';

describe('ExtraerDatosService', () => {
  let service: ExtraerDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraerDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
