import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  list = [0, 1, 2, 3, 4, 5];
  slideOpts = {
    initialSlide: 0,
    speed: 2000,
    autoplay: true,
    transition: 'fade'
  };
  constructor(private router: Router) { }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  toCategories(){
    this.router.navigate(['dashboard','categories'])
  }
}
