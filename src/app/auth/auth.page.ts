import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  slideOpts = {
    speed: 400
  };

  ativo: string = 'login';

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  slide: string;
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    if (ev.detail.value == "signup") {
      this.ativo = ev.detail.value
      // this.slides.slideTo(1)
    } else if (ev.detail.value == "forgot") {
      this.ativo = ev.detail.value
      // this.slides.slideTo(2)
    } else {
      this.ativo = ev.detail.value
      this.slides.slideTo(0)
    }

    console.log('Segment changed', ev);
  }

}
