import { TestBed } from '@angular/core/testing';

import { UserIsLoggedService } from './user-is-logged.service';

describe('UserIsLoggedService', () => {
  let service: UserIsLoggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIsLoggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
