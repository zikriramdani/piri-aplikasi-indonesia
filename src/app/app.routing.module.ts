import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { TransactionComponent } from 'src/app/transaction/pages/transaction.component';
import { AuthGuard } from 'src/app/guards';

const appRoutes: Routes = [
  { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', redirectTo: '/transaction' }
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
