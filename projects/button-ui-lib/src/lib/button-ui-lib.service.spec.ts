import { TestBed } from '@angular/core/testing';

import { ButtonUiLibService } from './button-ui-lib.service';

describe('ButtonUiLibService', () => {
  let service: ButtonUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
