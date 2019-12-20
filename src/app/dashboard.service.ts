import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    dataDummy: Array<object> = [
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'},
        { title: 'Conor McGregor', body: 'lorem ipsum'},
        { title: 'Tony Ferguson', body: 'lorem ipsum'},
        { title: 'Max Holloway', body: 'lorem ipsum'},
        { title: 'Jon Jones', body: 'lorem ipsum'},
        { title: 'Daniel Cormier', body: 'lorem ipsum'},
        { title: 'Brock Lesnar', body: 'lorem ipsum'}
    ];

    constructor() { }

    get() {
        return of(this.dataDummy);
    }
}
