import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import icons from 'glyphicons'

import { MasterComponent } from 'src/app/master/master.component';
import { HeaderComponent } from 'src/app/master/header/header.component';
import { NavbarComponent } from 'src/app/master/navbar/navbar.component';
import { FooterComponent } from 'src/app/master/footer/footer.component';
import { TransactionComponent } from 'src/app/transaction/pages/transaction.component';

// Routing Module
import { MasterRoutingModule }  from 'src/app/master/master.routing.module';


@NgModule({
  // exports: [MasterComponent],
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
