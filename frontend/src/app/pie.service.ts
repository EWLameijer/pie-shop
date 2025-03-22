import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pie } from './pie';

@Injectable({
  providedIn: 'root',
})
export class PieService {
  constructor(private http: HttpClient) {}

  fetchPie(): Observable<Pie> {
    return this.http.get<Pie>('http://localhost:8080/api/v1/pies');
  }
}
