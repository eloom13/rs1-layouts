import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { GalleryComponent } from "../gallery/gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, HeroSectionComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
