import { TestBed } from '@angular/core/testing';

import { ServicioUbicacionService } from './servicio-ubicacion.service';

describe('ServicioUbicacionService', () => {
  let service: ServicioUbicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioUbicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
