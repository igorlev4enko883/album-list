import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { DataService } from '../../services/data.service';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  albums: Album[];

  safeBg: SafeStyle;

  constructor(
    private dataservice: DataService,
  private _sanitizer: DomSanitizer,
    ) { }

  ngOnInit() {
    this.getHeroes();
    // this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  getHeroes(): void {
    this.dataservice.getData().subscribe(data => this.albums = data['albums']);
  }

  getBg(url): SafeStyle {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

}
