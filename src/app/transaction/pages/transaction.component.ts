import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User, Transaction, Pulsa, Operator } from 'src/app/models';
import { AlertService, TransactionService, PulsaService, OperatorService, AuthenticationService } from 'src/app/services';

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

    public selectedPulsa = "";

    operators: Operator[] = [];
    pulsas: Pulsa[] = [];
    hargaModel: any;
    isLoading = true;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private transactionService: TransactionService,
        private pulsaService: PulsaService,
        private operatorService: OperatorService,
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

        this.loadAllOperator();
        this.loadAllPulsa();
        this.loadAllTransaction();
        this.resetForm();
    }

    // convenience getter for easy access to form fields
    get f() { return this.transactionForm.controls; }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    private loadAllTransaction() {
        // this.loading = true;
        this.transactionService.getAll().pipe(first()).subscribe(transactions => {
            this.transactions = transactions;
            this.isLoading = false;
        });
    }

    private loadAllOperator() {
        this.operatorService.getAll().subscribe(operators => {
            this.operators = operators;
        });
    }

    private loadAllPulsa() {
        this.pulsaService.getAll().subscribe(pulsas => {
            this.pulsas = pulsas;
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
                window.location.reload();
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    resetForm() {
        this.transactionForm.reset({
            'phoneNumber': '',
            'operator': '',
            'pulsa': '',
            'harga': ''
        });
    }

    onChange(event: any) {
        this.loadAllPulsa();
        const index = this.pulsas.findIndex(x => x.pulsa === this.transactionForm.get('pulsa').value);
        this.hargaModel = this.pulsas[index].harga;
    }

    deleteTransaction(id: number) {
        this.transactionService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllTransaction();
            this.alertService.success('Delete Transaction successful', true);
        });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
