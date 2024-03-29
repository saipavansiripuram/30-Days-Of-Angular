import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from "aos";
@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
  @Input() title: string='';
  @Input() tag: string = '';
  @Input() description: string = '';
  @Input() link:string='';

  ngOnInit(){
    AOS.init();
  }
}
