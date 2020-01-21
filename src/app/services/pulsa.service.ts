import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { Pulsa } from 'src/app/models/pulsa';

@Injectable({ providedIn: 'root' })
export class PulsaService {
    constructor(private http: HttpClient) { }
    
    getAll() {
        return this.http.get<Pulsa[]>('/pulsas');
    }
}