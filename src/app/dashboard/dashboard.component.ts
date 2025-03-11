import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 
  ngAfterViewInit() {
    const carousel = document.getElementById('carousel');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % this.slides.length;
      if (carousel) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
      }
    }, 3000);
  }
  slides = [
    { img: "assets/images/carrusel1.JPG" },
    { img: "assets/images/carrusel2.png" },
    { img: "assets/images/carrusel3.JPG" },
    // Añade más imágenes según sea necesario
  ];
}