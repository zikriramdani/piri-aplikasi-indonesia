import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { Operator } from 'src/app/models/operator';

@Injectable({ providedIn: 'root' })
export class OperatorService {
    constructor(private http: HttpClient) { }
    
    getAll() {
        return this.http.get<Operator[]>('/operators');
    }
}