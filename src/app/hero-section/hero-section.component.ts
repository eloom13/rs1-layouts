import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WindowSizeService } from '../window-size.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  windowWidth: number = 0;

  constructor(private windowSizeService: WindowSizeService) {}

  ngOnInit(): void {
    this.windowSizeService.windowWidth$.subscribe((width) => {
      this.windowWidth = width;
    });
  }
}
