import { NgModule } from '@angular/core';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';
import { GlobalModule } from 'src/app/dashboard/global.module';

@NgModule({
  imports: [
    GlobalModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
