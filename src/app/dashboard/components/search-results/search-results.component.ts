import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsComponent } from '../products/products.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  @Input() termo;
  @Input() resultado;
  form = new FormGroup({
    search: new FormControl([this.termo])
  });

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
  constructor(private router: Router, private activedRoute: ActivatedRoute, public modalController: ModalController) { }

  ngOnInit() {
    if (this.activedRoute.snapshot.params.product) {
      // this.resultado = this.activedRoute.snapshot.params.product;
      this.resultado = this.resultBusca;
    }

  }

  searchProduct() {

  }

  openProduct(product) {
    this.modalController.dismiss();
    // this.modalController.create({
    //   component: ProductsComponent,
    //   componentProps: {
    //     "product": product
    //   }
    // })

    this.router.navigate(['dashboard', 'product'])
  }

}
