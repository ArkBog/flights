import { TestBed } from '@angular/core/testing';

import { FlightFormService } from './flight-form.service';

describe('FlightFormService', () => {
  let service: FlightFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
