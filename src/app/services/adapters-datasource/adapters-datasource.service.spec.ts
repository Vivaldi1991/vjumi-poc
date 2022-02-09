import { TestBed } from '@angular/core/testing';

import { AdaptersDatasourceService } from './adapters-datasource.service';

describe('AdaptersDatasourceService', () => {
  let service: AdaptersDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdaptersDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
