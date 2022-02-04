import { TestBed } from '@angular/core/testing';

import { ParticipatesService } from './participants.service';

describe('ParticipatesService', () => {
  let service: ParticipatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
