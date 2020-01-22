import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transaction } from 'src/app/models/transaction';

@Injectable({ providedIn: 'root' })
export class TransactionService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Transaction[]>('/transactions');
    }

    register(transaction: Transaction) {
        return this.http.post('/transactions/register', transaction);
    }

    delete(id: number) {
        return this.http.delete('/transactions/' + id);
    }
}