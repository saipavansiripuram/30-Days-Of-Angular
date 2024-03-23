import { Component } from '@angular/core';
import {  RouterLink, RouterModule } from '@angular/router';
import { DayService } from '../../Services/day.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule,RouterLink,NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  days: any[] = [];

  constructor(private dayService: DayService) {}

  ngOnInit(): void {
    this.dayService.getDays().subscribe(data => {
      this.days = data;
    });
  }
}
