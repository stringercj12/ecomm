import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { SearchResultsComponent } from 'src/app/dashboard/components/search-results/search-results.component';
import { AudioManagement } from '@ionic-native/audio-management/ngx';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  termo: string;
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  form = new FormGroup({
    termo: new FormControl([''])
  });

  recommended = [
    {
      title: 'Denim Jeans'
    },
    {
      title: 'Mini Skirt'
    },

    {
      title: 'Jacket'
    },

    {
      title: 'Accessories'
    },

    {
      title: 'Sports Accessories'
    },

    {
      title: 'Yoga Pants'
    },

    {
      title: 'Eye Shadow'
    },
  ]

  resultBusca = [
    {
      id: 1,
      title: 'Denim Jeans',
      price: '$24.99',
      star: '4.9',
      imgPath: '/assets/camisa.png'
    },
    {
      id: 2,
      title: 'Mini Skirt',
      price: '$24.99',
      star: '4.3',
      imgPath: '/assets/camisa2.png'
    },

    {
      id: 3,
      title: 'Jacket',
      price: '$24.99',
      star: '4.7',
      imgPath: '/assets/camisa3.png'
    },

    {
      id: 4,
      title: 'Accessories',
      price: '$24.99',
      star: '5.0',
      imgPath: '/assets/camisa4.png'
    },

    {
      id: 5,
      title: 'Sports Accessories',
      price: '$24.99',
      star: '2.9',
      imgPath: '/assets/camisa5.png'
    },

    {
      id: 6,
      title: 'Yoga Pants',
      price: '$24.99',
      star: '3.9',
      imgPath: '/assets/camisa6.png'
    },
  ]
  constructor(private router: Router, public modalController: ModalController, public audioman: AudioManagement) { }

  ngOnInit() {
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }


  voice() {
    alert('Pessa permissão para falar')
  }


  async searchProduct() {
    let termo = this.form.value.termo;

    // const modal = await this.modalController.create({
    //   component: SearchResultsComponent,
    //   componentProps: {
    //     'termo': this.form.value.termo,
    //     'resultado': this.resultBusca
    //   }
    // });
    //return await modal.present();
    this.router.navigate(['dashboard', 'search-results', termo]);
  }

  getAudio() {
    this.audioman.getAudioMode()
      .then((value: AudioManagement.AudioModeReturn) => {
        console.log('Device audio mode is ' + value.label + ' (' + value.audioMode + ')');
        this.termo = value.label;
      })
      .catch((reason) => {
        console.log(reason);
      });
  }

}
