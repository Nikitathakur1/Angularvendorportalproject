import { TestBed } from '@angular/core/testing';

import { ManageSupplierServiceService } from './manage-supplier-service.service';

describe('ManageSupplierServiceService', () => {
  let service: ManageSupplierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageSupplierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
