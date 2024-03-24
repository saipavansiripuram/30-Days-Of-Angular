import { Component } from '@angular/core';
import { QuestionService } from '../../Services/question.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-q-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './q-card.component.html',
  styleUrl: './q-card.component.css'
})
export class QCardComponent {
  questions: any[] = [];

  constructor(private questionService:QuestionService){}

  ngOnInit(){
    this.questionService.getQuestion().subscribe(question =>{
      this.questions = question;
    })
  }

}
