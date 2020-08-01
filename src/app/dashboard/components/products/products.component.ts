import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {


  @Input() product = {
    id: 5,
    title: 'Sports Accessories',
    price: '$24.99',
    star: '2.9',
    imgPath: '/assets/camisa5.png'
  };
  selectTab: string = 'tab-1';

  list = [0, 1, 2, 3, 4, 5];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.selectTab = ev.detail.value;
  }

  toBack(url = 'dashboard') {
    this.router.navigate([url]);
  }

}
