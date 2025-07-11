import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'http://localhost:3000/api/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }

  addTransaction(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateTransaction(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
