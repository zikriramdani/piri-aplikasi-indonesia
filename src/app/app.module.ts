import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import icons from 'glyphicons'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MasterModule } from './master/master.module';

// Routing Module
import { AppRoutingModule }  from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MasterModule,
    // AngularFontAwesomeModule,
    // icons
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
