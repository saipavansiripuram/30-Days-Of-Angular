import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { HomeCardComponent } from "../home-card/home-card.component";
import { isPlatformBrowser } from '@angular/common';
import AOS from "aos";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [HomeCardComponent,RouterLink]
})
export class MainComponent implements OnInit  {
  
    constructor() {}
   ngOnInit(): void {
    
      AOS.init();
    
  }
}
