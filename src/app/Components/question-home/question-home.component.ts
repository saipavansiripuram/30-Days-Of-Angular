import { Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor } from '@angular/common';
import { QCardComponent } from "../q-card/q-card.component";
import { ToastComponent } from '../../utils/toast/toast.component';
import { QuestionService } from '../../Services/question.service';
import AOS from 'aos';

@Component({
    selector: 'app-question-home',
    standalone: true,
    templateUrl: './question-home.component.html',
    imports: [NgFor, QCardComponent,ToastComponent]
})
export class QuestionHomeComponent  {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        AOS.init();
      }
    }
}
