import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css'],
})
export class PrimaryButtonComponent {
  @Input() text: string = 'Click Me';
  @Input() color: string = 'blue';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
