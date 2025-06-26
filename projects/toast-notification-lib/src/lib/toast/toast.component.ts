import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastMessage, ToastService } from '../toast.service';

@Component({
  selector: 'ui-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  message: string | null = null;
  type: string = 'info';
  private subscription: Subscription;

  constructor(private toastService: ToastService) {
    this.subscription = this.toastService.toastState.subscribe(
      (toast: ToastMessage) => {
        this.message = toast.message;
        this.type = toast.type;
        setTimeout(() => (this.message = null), 3000); // Auto-dismiss after 3s
      }
    );
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
