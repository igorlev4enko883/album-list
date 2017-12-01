import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AlbumsListComponent } from '../../components/albums-list/albums-list.component';
import { AlbumSingleComponent } from '../../components/album-single/album-single.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {PopupComponent} from "../../components/popup/popup.component";

const routes = [
  { path: '', redirectTo: '/album-list', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'album/:id', component: AlbumSingleComponent },
  { path: 'album-list', component: AlbumsListComponent },
  { path: 'add-album', component: PopupComponent, outlet: 'popup' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class RoutingModule { }
