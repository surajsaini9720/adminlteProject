import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private baseUrl = 'http://localhost:3000/api/customers';

  constructor(private http: HttpClient) {}

  getCustomers(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?userId=${userId}`);
  }

  addCustomer(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateCustomer(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
