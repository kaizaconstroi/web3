import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="hasError()" class="p-message p-message-error">
      {{ text }}
    </div>
  `,
  styles: `
  .p-message-error {
    padding: 3px;
    margin: 0;
    margin-top: 4px;
  }
  `
})
export class MessageComponent {
  @Input() error!: string;
  @Input() control!: AbstractControl | NgModel;
  @Input() text!: string;

  hasError(): boolean {
    const control = this.control instanceof NgModel ? this.control.control : this.control;
    return !!control && control.hasError(this.error) && control.dirty;
  }

}