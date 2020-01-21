import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User, Transaction } from 'src/app/models';
import { AlertService, TransactionService, AuthenticationService } from 'src/app/services';

@Component({
  	selector: 'app-transaction',
  	templateUrl: './transaction.component.html',
  	styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
    transactionForm: FormGroup;
	loading = false;
    submitted = false;
    
	currentUser: User;
    currentUserSubscription: Subscription;
    transactions: Transaction[] = [];

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
		private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private transactionService: TransactionService,
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.transactionForm = this.formBuilder.group({
			phoneNumber: ['', Validators.required],
			operator: ['', Validators.required],
            pulsa: ['', Validators.required],
            harga: ['', Validators.required]
        });
        
        this.loadAllTransaction();
    }

    // convenience getter for easy access to form fields
	get f() { return this.transactionForm.controls; }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    private loadAllTransaction() {
        this.transactionService.getAll().pipe(first()).subscribe(transactions => {
            this.transactions = transactions;
        });
    }

    onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.transactionForm.invalid) {
			return;
		}

		this.loading = true;
		this.transactionService.register(this.transactionForm.value).pipe(first()).subscribe(
			data => {
				this.alertService.success('Transaction successful', true);
				this.router.navigate(['/transaction']);
			},
			error => {
				this.alertService.error(error);
				this.loading = false;
			});
	}
}
