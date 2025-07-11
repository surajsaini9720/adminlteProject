// src/app/components/report/report.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from '../../service/report.service';

@Component({
  selector: 'app-report',
  standalone:false,
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportForm!: FormGroup;
  reports: any[] = [];
  userId = '123456789'; // Static for now, replace with auth user id
customers: any;

  constructor(private fb: FormBuilder, private rs: ReportService) {}

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      customerId: [''],
      startDate: [''],
      endDate: [''],
      userId: [this.userId]
    });

    this.getReport(); // Load initial report
  }

  getReport() {
    const filters = this.reportForm.value;
    this.rs.getReport(filters).subscribe((res: any[]) => {
      this.reports = res;
    });
  }

  downloadReport() {
    this.rs.downloadReport(this.reportForm.value).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'report.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
