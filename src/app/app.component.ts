import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Day1Component } from "./Components/day-1/day-1.component";
import { MainComponent } from "./Components/main/main.component";
import { HeaderComponent } from "./Components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, Day1Component, RouterLink, RouterModule, NgFor, MainComponent, HeaderComponent]
})
export class AppComponent {
  title = 'Angular';
}
