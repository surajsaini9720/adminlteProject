// src/app/components/supplier/supplier.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SupplierService } from '../../service/supplier.service';

@Component({
  selector: 'app-supplier',
  standalone: false,
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  supplierForm!: FormGroup;
  suppliers: any[] = [];
  isEdit = false;
  selectedId = '';
  showForm = false;
  userId = '123456789'; // replace later with actual auth userId

  constructor(private fb: FormBuilder, private ss: SupplierService) {}

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      gstNumber: [''],
      address: [''],
      userId: [this.userId]
    });

    this.getAllSuppliers();
  }

  getAllSuppliers() {
    this.ss.getSuppliers(this.userId).subscribe(res => {
      this.suppliers = res;
    });
  }

  onSubmit() {
    const formData = this.supplierForm.value;

    if (this.isEdit) {
      this.ss.updateSupplier(this.selectedId, formData).subscribe(() => {
        this.getAllSuppliers();
        this.resetForm();
      });
    } else {
      this.ss.addSupplier(formData).subscribe(() => {
        this.getAllSuppliers();
        this.resetForm();
      });
    }
  }

  editSupplier(supp: any) {
    this.supplierForm.patchValue(supp);
    this.selectedId = supp._id;
    this.isEdit = true;
    this.showForm = true;
  }

  deleteSupplier(id: string) {
    this.ss.deleteSupplier(id).subscribe(() => {
      this.getAllSuppliers();
    });
  }

  closeForm() {
    this.showForm = false;
    this.resetForm();
  }

  resetForm() {
    this.supplierForm.reset({ userId: this.userId });
    this.isEdit = false;
  }
}
