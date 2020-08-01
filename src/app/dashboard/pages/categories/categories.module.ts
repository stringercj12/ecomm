import { NgModule } from '@angular/core';
import { CategoriesPageRoutingModule } from './categories-routing.module';
import { CategoriesPage } from './categories.page';
import { GlobalModule } from '../../global.module';

@NgModule({
  imports: [
    GlobalModule,
    CategoriesPageRoutingModule
  ],
  declarations: [CategoriesPage]
})
export class CategoriesPageModule { }
