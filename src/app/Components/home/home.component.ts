import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { Day2Component } from "../day-2/day-2.component";
import { DayService } from '../../Services/day.service';
import { Day1Component } from '../day-1/day-1.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterLink, RouterModule, CardComponent, Day2Component ,Day1Component,NgFor]
})
export class HomeComponent implements OnInit {
   
  days: any[] = [];

  constructor(private dayService: DayService) {}

  ngOnInit(): void {
    this.dayService.getDays().subscribe(data => {
      this.days = data;
    });
  }
}


