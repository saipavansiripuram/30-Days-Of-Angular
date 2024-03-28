import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HomeCardComponent } from "../home-card/home-card.component";
import { isPlatformBrowser } from '@angular/common';
import AOS from "aos";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [HomeCardComponent]
})
export class MainComponent implements OnInit  {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    
   ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   AOS.init();
    // }
  }
}
