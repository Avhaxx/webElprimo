import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { SlickCarouselModule } from 'ngx-slick-carousel';
=======

>>>>>>> cfac41caacd26993ee30ce97858adabf2dca5512

@Component({
  selector: 'app-dashboard',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, SlickCarouselModule],
=======
  imports: [CommonModule, ],
>>>>>>> cfac41caacd26993ee30ce97858adabf2dca5512
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