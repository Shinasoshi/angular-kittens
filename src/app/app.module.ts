import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FavouritesComponent} from './favourites/favourites.component';
import {NavComponent} from './nav/nav.component';
import {KittenFormComponent} from './home/components/kitten-form/kitten-form.component';
import {KittenComponent} from './home/containers/kitten/kitten.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    NavComponent,
    KittenFormComponent,
    KittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
