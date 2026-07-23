import { TestBed } from '@angular/core/testing';

import { AuthInterCeptorService } from './auth-inter-ceptor.service';

describe('AuthInterCeptorService', () => {
  let service: AuthInterCeptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterCeptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
