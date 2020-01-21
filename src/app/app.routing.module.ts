import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { PageNotFoundComponent }   from 'src/app/master/page-not-found/page-not-found.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { TransactionComponent } from 'src/app/transaction/pages/transaction.component';

const appRoutes: Routes = [
  // { path: '**', redirectTo: '/404' },
  // { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'transaction', component: TransactionComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
