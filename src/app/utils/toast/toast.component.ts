import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgFor],
  templateUrl: './toast.component.html',

})
export class ToastComponent {
  @Input() title: string='';
  @Input() message: string[] = []; 
  @Output() closeToast: EventEmitter<void> = new EventEmitter<void>();
toastOpen: boolean=true;

  close(): void {
    this.closeToast.emit();
    this.toastOpen = false;
  }
  open(): void {
    this.toastOpen = true;
  }

}
