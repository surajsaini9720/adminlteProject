import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://localhost:3000/api/reports'; // adjust if needed

  constructor(private http: HttpClient) {}

  getReport(filters: any): Observable<any[]> {
    let params = new HttpParams()
      .set('userId', filters.userId || '')
      .set('customerId', filters.customerId || '')
      .set('startDate', filters.startDate || '')
      .set('endDate', filters.endDate || '');

    return this.http.get<any[]>(`${this.baseUrl}`, { params });
  }

  downloadReport(filters: any): Observable<Blob> {
    let params = new HttpParams()
      .set('userId', filters.userId || '')
      .set('customerId', filters.customerId || '')
      .set('startDate', filters.startDate || '')
      .set('endDate', filters.endDate || '');

    return this.http.get(`${this.baseUrl}/download`, {
      params,
      responseType: 'blob'
    });
  }
}
