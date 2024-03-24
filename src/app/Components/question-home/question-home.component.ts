import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { QCardComponent } from "../q-card/q-card.component";

@Component({
    selector: 'app-question-home',
    standalone: true,
    templateUrl: './question-home.component.html',
    styleUrl: './question-home.component.css',
    imports: [NgFor, QCardComponent]
})
export class QuestionHomeComponent  {

}
