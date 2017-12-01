import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Album } from '../models/album.model';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

// let companies
// (async () => {
//   const response = await fetch('assets/albums.json');
//   companies = await response.json();
//   console.log('companies', companies);
// })();

@Injectable()
export class LocalDataService implements InMemoryDbService {

  constructor() {  }

  async createDb(reqInfo?: RequestInfo) {

    // let albums: Album[] = [];
    let albums: Promise<Album[]>;

    const url = 'assets/albums.json';

    return new Promise<Album[]>(
      () =>
        fetch(url)
          .then(response => {
            console.log(response)
            return response.json();
          })
          .then((data) => {
            // console.log(data);
            albums = data;
            console.log(albums);
            return albums;
          })
          .catch(() => {
          console.log('Server Error');
        })
    );

    // return albums;
  }
}
