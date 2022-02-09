import { TestBed } from '@angular/core/testing';

import { FahrzeugDatasourceService } from './fahrzeug-datasource.service';

describe('FahrzeugDatasourceService', () => {
  let service: FahrzeugDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FahrzeugDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
