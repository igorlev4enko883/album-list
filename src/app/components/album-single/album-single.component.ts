import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../../services/data.service';

import { Album } from '../../models/album.model';


@Component({
  selector: 'app-album-single',
  templateUrl: './album-single.component.html',
  styleUrls: ['./album-single.component.scss']
})
export class AlbumSingleComponent implements OnInit {

  // @Input() selectedAlbum: Album;

  private albums: Album[];
  public album: Album;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.dataservice.getData()
      .subscribe(
        (data) => {
          this.albums = data['albums'];
        },
        (error) => {
          console.log('data get error' + error);
          },
        () => {
          console.log('success');
        this.album = this.albums.find(al => al.id === id);
      });
  }
}
