import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent }   from 'src/app/master/notfound/notfound.component';
import { LoginComponent } from 'src/app/login/login.component';

const appRoutes: Routes = [
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotfoundComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: 'src/app/master/master.module' },
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
