import {Component, OnInit} from '@angular/core';
import {KittensService, StoredKitten} from '../shared/services/kittens.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouriteKittens: StoredKitten[];

  constructor(private kittensService: KittensService) {
  }

  ngOnInit() {
    this.favouriteKittens = this.kittensService.getKittensFromStorage();
  }

}
