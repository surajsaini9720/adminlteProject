import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customers: any[] = [];
  isEdit = false;
  selectedId = '';
  userId = '123456789'; // Static userId for now
  showForm = false; // <-- used for toggling form visibility

  constructor(private fb: FormBuilder, private cs: CustomerService) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      address: [''],
      gstNumber: [''],
      userId: [this.userId]
    });

    this.getAllCustomers();
  }

  // 🔁 Get all customer data
  getAllCustomers() {
    this.cs.getCustomers(this.userId).subscribe(res => {
      this.customers = res;
    });
  }

  // ✅ Form Submit for Add or Update
  onSubmit() {
    const formData = this.customerForm.value;

    if (this.isEdit) {
      this.cs.updateCustomer(this.selectedId, formData).subscribe(() => {
        this.getAllCustomers();
        this.customerForm.reset({ userId: this.userId });
        this.isEdit = false;
        this.showForm = false;
      });
    } else {
      this.cs.addCustomer(formData).subscribe(() => {
        this.getAllCustomers();
        this.customerForm.reset({ userId: this.userId });
        this.showForm = false;
      });
    }
  }

  // ✏️ Edit button clicked
  editCustomer(cust: any) {
    this.customerForm.patchValue(cust);
    this.selectedId = cust._id;
    this.isEdit = true;
    this.showForm = true;
  }

  // ❌ Delete customer
  deleteCustomer(id: string) {
    this.cs.deleteCustomer(id).subscribe(() => {
      this.getAllCustomers();
    });
  }

  // ➕ Open form (Add New)
  openForm() {
    this.customerForm.reset({ userId: this.userId });
    this.isEdit = false;
    this.showForm = true;
  }
  closeForm() {
  this.customerForm.reset({ userId: this.userId });
  this.isEdit = false;
  this.showForm = false;
}
}
