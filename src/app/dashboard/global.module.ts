import { ProductsComponent } from './components/products/products.component';
import { AudioManagement } from '@ionic-native/audio-management/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        HeaderComponent,
        SearchResultsComponent,
        ProductsComponent,
    ],
    entryComponents: [SearchResultsComponent],
    providers:[
        AudioManagement
    ],
    declarations: [HeaderComponent, SearchResultsComponent,ProductsComponent]
})
export class GlobalModule { }
