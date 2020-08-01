import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { ProductsComponent } from './components/products/products.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResolver } from './components/search-resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/tabs/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./pages/tabs/search/search.module').then(m => m.SearchPageModule)
      }
    ]
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'search-results/:product',
    component: SearchResultsComponent,
    data: {
      product: SearchResolver
    }
  },
  {
    path: 'product',
    component: ProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule { }
