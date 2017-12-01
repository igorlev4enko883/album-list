import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

import {Album} from '../../models/album.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  albums: Album[];

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    return this.dataservice.getData()
      .subscribe(data => this.albums = data['albums']);
  }

  addAlbum(album: Album) {
    this.dataservice.addAlbum(album).subscribe(data => this.albums.push(data));
  }
}
