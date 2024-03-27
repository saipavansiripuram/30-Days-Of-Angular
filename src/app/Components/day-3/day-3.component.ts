import { Component, OnInit } from '@angular/core';
import { DayService } from '../../Services/day.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-day-3',
  standalone: true,
  imports: [NgFor,NgFor],
  templateUrl: './day-3.component.html',

})
export class Day3Component implements OnInit {
  day: string = "day-3";
  question: any[] = [];

  constructor(private dayService: DayService) { }

  ngOnInit(): void {
    this.dayService.getDays().subscribe(data => {
      this.question = data
    
    });
  }
}
