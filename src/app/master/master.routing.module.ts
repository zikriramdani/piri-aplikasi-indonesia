import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionComponent }   from '../transaction/transaction.component';

const appRoutes: Routes = [
  { path: 'transaction', component: TransactionComponent}
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