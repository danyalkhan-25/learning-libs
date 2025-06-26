import { TestBed } from '@angular/core/testing';

import { ToastNotificationLibService } from './toast-notification-lib.service';

describe('ToastNotificationLibService', () => {
  let service: ToastNotificationLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastNotificationLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
