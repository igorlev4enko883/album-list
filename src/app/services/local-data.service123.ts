import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Album } from '../models/album.model';

// import { HttpClient } from '@angular/common/http';

// import {Observable} from 'rxjs/Observable';

@Injectable()
export class LocalDataService implements InMemoryDbService {

  constructor(/*private http: HttpClient*/) {  }

  async createDb() {

    // let albums: Album[] = [];
    let albums: Promise<Album[]>;

    const url = '/assets/albums.json';

    // this.http.get<Album[]>(url).subscribe(data => albums = data);

       return new Promise<Album[]>(
         () =>
          fetch(url).then(response => {
          return response.json();
        }).then((data) => {
          // console.log(data);
          albums = data;
          console.log(albums);
          return albums;
        }).catch(() => {
          console.log('Server Error');
        })
       );

    // return albums;
  }
}
