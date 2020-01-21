import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import icons from 'glyphicons'

import { MasterComponent } from './master.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionComponent } from '../transaction/transaction.component';

// Routing Module
import { MasterRoutingModule }  from './master.routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MasterRoutingModule,
    // AngularFontAwesomeModule,
    // icons
  ],
  providers: [
  ],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
