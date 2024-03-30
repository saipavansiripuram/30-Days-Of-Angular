import { isPlatformBrowser, NgFor } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { QCardAdvComponent } from "../../Components/q-card-adv/q-card-adv.component";
@Component({
    selector: 'app-questions-adv',
    standalone: true,
    templateUrl: './questions-adv.component.html',
    imports: [NgFor, QCardAdvComponent]
})
export class QuestionsAdvComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
