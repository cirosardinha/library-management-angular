import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [[RouterOutlet, RouterLink, RouterLinkActive]],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isMobile: boolean = false;

  toggleDropdown() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
