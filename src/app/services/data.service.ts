import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, Subscribable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/retry';


import { Album } from '../models/album.model';
import {SubscribeOnObservable} from "rxjs/observable/SubscribeOnObservable";

interface IAlbumData {
  albums: Album[];
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  private ALBUMS: Album[];

  private url = '/assets/albums.json';

  // private fake_url = 'api/albums';

  constructor(private http: HttpClient) { }

  getData(): Observable<Album[]> {
    console.log('Reading data...');
    return this.http.get<Album[]>(this.url)
      .pipe(
        catchError(this.handleError('getData', []))
      );
  }

  addAlbum(album: Album): Observable<Album> {
    console.log('Adding an Album...');
    return this.http.post<Album>(this.url, album, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error (error);

      return of(result as T);
    };
  }

}
