import { Component, EventEmitter, Output, Inject } from "@angular/core";
import { QuestionService } from "../../Services/question.service";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import { ToastComponent } from "../../utils/toast/toast.component";
import { RouterLink } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: "app-q-card",
  standalone: true,
  imports: [NgFor, ToastComponent, NgIf, RouterLink, CommonModule],
  templateUrl: "./q-card.component.html",
  styleUrl: "./q-card.component.css",
})
export class QCardComponent {
  questions: any[] = [];
  @Output() questionDetailsClicked = new EventEmitter<{
    question: string;
    Long_Ans: string;
  }>();
  selectedQuestionDetails: any;

  constructor(
    private questionService: QuestionService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.questionService.getQuestion().subscribe((question) => {
      this.questions = question;
    });

    AOS.init();
  }

  // Function to handle "more" click and emit event
  showQuestionDetails(questionId: number) {
    // const question = this.questions.find(q => q.id === questionId);
    // if (question) {
    //   this.selectedQuestionDetails = question.question;
    //   this.questionDetailsClicked.emit(question.question);
    // }
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
