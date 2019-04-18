import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FavouritesComponent} from './favourites/favourites.component';
import {KittenComponent} from './home/containers/kitten/kitten.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: KittenComponent},
  {path: 'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
