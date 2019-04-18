import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface KittenFile {
  file: string;
}

export interface StoredKitten {
  file: string;
  name: string;
  race: string;
}

@Injectable({
  providedIn: 'root'
})
export class KittensService {

  private kittenUrl = 'https://aws.random.cat/meow';

  constructor(private http: HttpClient) {
  }

  getKittenPicture() {
    return this.http.get(this.kittenUrl);
  }

  addKittenToStorage(event: any) {
    localStorage.setItem('kittens', JSON.stringify([...JSON.parse(localStorage.getItem('kittens')) || [], ...[event.value]]));
  }

  getKittensFromStorage() {
    return JSON.parse(localStorage.getItem('kittens'));
  }

}
