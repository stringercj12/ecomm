import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor() { }


  mensApparel = [
    {
      title: 'T-shirts'
    },
    {
      title: 'Shirts'
    },
    {
      title: 'Pants & Jeans'
    },
    {
      title: 'Socks & Ties'
    },
    {
      title: 'Underwear'
    },
    {
      title: 'Jackets'
    },
    {
      title: 'Coats'
    },
    {
      title: 'Sweaters'
    }
  ]

  womenApparel = [
    {
      title: 'Officewear'
    },
    {
      title: 'Blouse & T-Shirts'
    },
    {
      title: 'Pants & Jeans'
    },
    {
      title: 'Dresses'
    },
    {
      title: 'Lingerie'
    },
    {
      title: 'Jackets'
    },
    {
      title: 'Coats'
    },
    {
      title: 'Sweaters'
    }
  ]

  ngOnInit() {
  }

}
