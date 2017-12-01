import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Album } from '../../models/album.model';
import { NgModel } from '@angular/forms';
import {Track} from "../../models/track.model";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  album: Album = new Album;
  details: string;
  addingTracks = false;
  tracks: Track[];

  constructor(
    private router: Router,
    private dataservice: DataService
  ) { }

  addAlbum() {

    console.log(this.album)
    this.details = 'Adding Album';

    // this.d

    setTimeout(() => {
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{outlets: {popup: null}}]);
  }

  addTracks(): boolean {
    return !this.addingTracks ? this.addingTracks = true : this.addingTracks = false;
  }

}
