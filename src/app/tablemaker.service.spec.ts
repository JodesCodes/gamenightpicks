import { TestBed } from '@angular/core/testing';

import { TablemakerService } from './tablemaker.service';

describe('TablemakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablemakerService = TestBed.get(TablemakerService);
    expect(service).toBeTruthy();
  });
});
