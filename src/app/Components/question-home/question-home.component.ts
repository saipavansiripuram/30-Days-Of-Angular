import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { QCardComponent } from "../q-card/q-card.component";
import { ToastComponent } from '../../utils/toast/toast.component';
import { QuestionService } from '../../Services/question.service';

@Component({
    selector: 'app-question-home',
    standalone: true,
    templateUrl: './question-home.component.html',
    imports: [NgFor, QCardComponent,ToastComponent]
})
export class QuestionHomeComponent  {
    
}
