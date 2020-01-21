import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import icons from 'glyphicons'

import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { MasterModule } from 'src/app/master/master.module';
import { NotfoundComponent }   from 'src/app/master/notfound/notfound.component';

// Routing Module
import { AppRoutingModule }  from 'src/app/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
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
