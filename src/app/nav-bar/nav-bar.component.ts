import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menuOpen: boolean = false;
  isScrolled: boolean = false;
  windowWidth: number = 0;
  user: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if the platform is a browser
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // .menu div ce uvijek biti prikazan kada je screen veci od 900px
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
  }


  // Prati poziciju NavBara i na osnovu toga dodaje background-color
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const heroSection = document.querySelector('app-hero-section') as HTMLElement;
      const heroBottom = heroSection.getBoundingClientRect().bottom;

      // Ako je dno hero sekcije iznad vrha prozora, promeni isScrolled
      this.isScrolled = heroBottom < 0;
    }
  }
}
