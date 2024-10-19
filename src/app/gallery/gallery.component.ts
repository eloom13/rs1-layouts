import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from '../window-size.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  windowWidth: number = 0;

  constructor(private windowSizeService: WindowSizeService) {
  }

  ngOnInit(): void {
    this.windowSizeService.windowWidth$.subscribe((width) => {
      this.windowWidth = width;
    });
  }
}
