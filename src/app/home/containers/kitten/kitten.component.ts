import {Component, OnInit} from '@angular/core';
import {KittenFile, KittensService} from '../../../shared/services/kittens.service';
import {delay} from 'q';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.scss']
})
export class KittenComponent implements OnInit {

  toggled: boolean = false;
  kittenPictureUrl: string = null;
  successMessage: boolean = false;

  constructor(private kittensService: KittensService) {
  }

  ngOnInit() {
    this.fetchKitten();
  }

  fetchKitten() {
    this.kittensService.getKittenPicture()
      .subscribe((kitten: KittenFile) => {
        this.kittenPictureUrl = kitten.file;
      });
  }

  addKittenToFavourites(event) {
    this.kittensService.addKittenToStorage(event);
    this.toggle();
    this.showSuccessMessage();

  }

  toggle() {
    this.toggled = !this.toggled;
  }

  showSuccessMessage() {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3000);
  }
}
