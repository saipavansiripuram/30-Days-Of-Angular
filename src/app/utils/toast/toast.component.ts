import { NgClass, NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-toast",
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: "./toast.component.html",
})
export class ToastComponent {
  @Input() title: string = "";
  @Input() message: string[] = [];
  @Output() closeToast: EventEmitter<void> = new EventEmitter<void>();
  formattedMessage: string[] = [];

  formatMessage() {
    this.formattedMessage = this.message.map((point) => {
      // Replace bold markdown with strong tags
      const boldRegex = /\*\*(.*?)\*\*/g;
      point = point.replace(boldRegex, "<strong>$1</strong>");

      // Replace code markdown with code tags
      const codeRegex = /```([\s\S]*?)```/g;
      point = point.replace(codeRegex, "<pre><code>$1</code></pre>");

      return point;
    });
  }
  ngOnInit() {
    this.formatMessage();
  }
  toastOpen: boolean = true;

  close(): void {
    this.closeToast.emit();
    this.toastOpen = false;
  }
  open(): void {
    this.toastOpen = true;
  }
}
