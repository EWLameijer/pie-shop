import { TestBed } from '@angular/core/testing';

import { PieService } from './pie.service';
import { provideHttpClient } from '@angular/common/http';

describe('PieService', () => {
  let service: PieService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(PieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
