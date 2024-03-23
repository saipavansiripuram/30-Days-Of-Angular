import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-1',
  standalone: true,
  imports: [],
  templateUrl: './day-1.component.html',
  styleUrl: './day-1.component.css',
})
export class Day1Component {
  @Input() day: any;
  questionHeader = `
 Counter
  `;
  question: string = `
  <p>Ram wants to enhance the functionality of the counter in Angular. In addition to incrementing by 3 when the button is clicked, Ram also wants to implement the following features:</p>
    <ol>
      <li>Decrement button: Add a button to decrement the counter by 1.</li>
      <li>Reset button: Add a button to reset the counter to 0.</li>
      <li>Limit: Implement a limit for the counter so that it cannot go below 0.</li>
    </ol>
`;

  count = 0;
  increament() {
    this.count++;
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
  reset() {
    this.count = 0;
  }
}
