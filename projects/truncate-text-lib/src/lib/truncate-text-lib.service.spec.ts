import { TestBed } from '@angular/core/testing';

import { TruncateTextLibService } from './truncate-text-lib.service';

describe('TruncateTextLibService', () => {
  let service: TruncateTextLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruncateTextLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
