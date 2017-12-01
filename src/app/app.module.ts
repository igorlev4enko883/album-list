import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RoutingModule } from './modules/routing/routing.module';

/* Development HTTP Server */
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SERVICES } from './services';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
// import { LocalDataService } from './services/local-data.service';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,

    // dev-mode only
    // HttpClientInMemoryWebApiModule.forRoot(
    //   LocalDataService, { delay: 2000, dataEncapsulation: false })
  ],
  providers: [ SERVICES ],
  bootstrap: [AppComponent]
})
export class AppModule { }
