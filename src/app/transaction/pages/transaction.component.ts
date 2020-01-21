import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services';
import { User } from 'src/app/models';

@Component({
  	selector: 'app-transaction',
  	templateUrl: './transaction.component.html',
  	styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
	currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  	ngOnInit() {
	}

	logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
