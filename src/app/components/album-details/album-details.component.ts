import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../../services/data.service';

import {Album} from '../../models/album.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album: Album;

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit() {
  }

}
