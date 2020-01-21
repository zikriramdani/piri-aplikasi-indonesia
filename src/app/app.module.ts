import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import icons from 'glyphicons'

import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { MasterModule } from 'src/app/master/master.module';
import { PageNotFoundComponent }   from 'src/app/master/page-not-found/page-not-found.component';

// Routing Module
import { AppRoutingModule }  from 'src/app/app.routing.module';
import { MasterRoutingModule }  from 'src/app/master/master.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MasterRoutingModule,
    MasterModule,
    // AngularFontAwesomeModule,
    // icons
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
