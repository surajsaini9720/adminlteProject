import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'http://localhost:3000/api/suppliers'; // Update if needed

  constructor(private http: HttpClient) {}

  // Add Supplier
  addSupplier(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, data);
  }

  // Get All Suppliers by userId
  getSuppliers(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all/${userId}`);
  }

  // Update Supplier
  updateSupplier(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, data);
  }

  // Delete Supplier
  deleteSupplier(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
