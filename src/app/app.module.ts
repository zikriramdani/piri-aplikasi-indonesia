import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import icons from 'glyphicons'

import { AppComponent } from 'src/app/app.component';
import { HeaderComponent }   from 'src/app/master/header/header.component';
import { NavbarComponent }   from 'src/app/master/navbar/navbar.component';
import { PageNotFoundComponent }   from 'src/app/master/page-not-found/page-not-found.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';

// Pages
import { TransactionComponent }   from 'src/app/transaction/pages/transaction.component';

// Routing Module
import { AppRoutingModule }  from 'src/app/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,

    // Pages
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
    // AngularFontAwesomeModule,
    // icons
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
