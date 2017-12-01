import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.scss']
})
export class MediaplayerComponent implements OnInit {

  @Input() link: string;
  safeUrl: SafeResourceUrl;

  constructor(
    private _sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }
}
