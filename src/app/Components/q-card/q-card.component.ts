import { Component, EventEmitter, Output } from '@angular/core';
import { QuestionService } from '../../Services/question.service';
import { NgFor, NgIf } from '@angular/common';
import { ToastComponent } from '../../utils/toast/toast.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-q-card',
  standalone: true,
  imports: [NgFor,ToastComponent,NgIf,RouterLink],
  templateUrl: './q-card.component.html',
  styleUrl: './q-card.component.css'
})
export class QCardComponent {
  questions: any[] = [];
  @Output() questionDetailsClicked = new EventEmitter<{ question: string, Long_Ans: string }>();
  selectedQuestionDetails: any;

  constructor(private questionService:QuestionService){}

  ngOnInit(){
    this.questionService.getQuestion().subscribe(question =>{
      this.questions = question;
    })
  }

  // Function to handle "more" click and emit event
  showQuestionDetails(questionId: number) {
    // const question = this.questions.find(q => q.id === questionId);
    // if (question) {
    //   this.selectedQuestionDetails = question.question;
    //   this.questionDetailsClicked.emit(question.question);
    // }
    const question = this.questions.find(q => q.id === questionId);
    if (question) {
      this.selectedQuestionDetails = question;
      this.questionDetailsClicked.emit({ question: question.question, Long_Ans: question.Long_Ans });
    }
  }

}
