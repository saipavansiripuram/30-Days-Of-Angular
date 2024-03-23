import { Routes } from '@angular/router';
import { Day1Component } from './Components/day-1/day-1.component';
import { HomeComponent } from './Components/home/home.component';
import { Day2Component } from './Components/day-2/day-2.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'day1', component: Day1Component },
    { path: 'day/:id', component: Day1Component },
    { path: 'day2', component: Day2Component },
];
