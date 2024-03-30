import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { AdvquestionService } from '../../Services/advquestion.service';
import { ToastComponent } from "../../utils/toast/toast.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-q-card-adv',
    standalone: true,
    templateUrl: './q-card-adv.component.html',
    imports: [ToastComponent,NgFor,NgIf]
})
export class QCardAdvComponent {
  questions: any[] = [];
  @Output() questionDetailsClicked = new EventEmitter<{
    question: string;
    Long_Ans: string;
  }>();
  selectedQuestionDetails: any;

  constructor(
    private questionService: AdvquestionService,
   
  ) {}

  ngOnInit() {
    this.questionService.getAdQuestion().subscribe((question) => {
      this.questions = question;
    });

    AOS.init();
  }

  
  showQuestionDetails(questionId: number) {
    const question = this.questions.find((q) => q.id === questionId);
    if (question) {
      this.selectedQuestionDetails = question;
      this.questionDetailsClicked.emit({
        question: question.question,
        Long_Ans: question.Long_Ans,
      });
    }
  }
}
