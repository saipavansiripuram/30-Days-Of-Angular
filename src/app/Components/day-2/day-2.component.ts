import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day-2',
  standalone: true,
  imports: [NgIf],
  templateUrl: './day-2.component.html',
  styleUrl: './day-2.component.css',
})
export class Day2Component {
  @Input() questionHeader2: string = 'Mouse leave & Mouse Over';
  count:number = 0;
  isShow:boolean = true;

  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }

  handleShow(){
    this.isShow = !this.isShow;
  }

  question1: string = `
   How can Ram implement dynamic content visibility in his Angular application based on mouse events? Ram wants to create a feature where:

1. When the mouse enters a specific area, the count should increase.
3. When the mouse leaves the specific area,the count should decrease.
2. When a button is clicked, a div should be displayed.
 `;
}
