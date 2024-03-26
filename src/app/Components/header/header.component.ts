import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,NgIf,RouterLink],
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {
isMenuOpen: boolean = false;
toggleMenu(){
  this.isMenuOpen = !this.isMenuOpen;
}
}
