import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent }   from '../login/login.component';
import { TransactionComponent }   from '../transaction/transaction.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
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
export class MasterRoutingModule {}
