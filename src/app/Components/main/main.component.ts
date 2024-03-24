import { Component } from '@angular/core';
import { HomeCardComponent } from "../home-card/home-card.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [HomeCardComponent]
})
export class MainComponent {

}
