import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { AuthService } from '../../service/auth.service';  

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
  userId = '';
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private cs: CustomerService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const tokenData = this.decodeToken();
    this.userId = tokenData?.userId || '';

    this.customerForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      address: [''],
      gstNumber: ['']
    });

    this.getAllCustomers();
  }

  getAllCustomers() {
    this.cs.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }

  onSubmit() {
    const formData = this.customerForm.value;

    if (this.isEdit) {
      this.cs.updateCustomer(this.selectedId, formData).subscribe(() => {
        this.getAllCustomers();
        this.customerForm.reset();
        this.isEdit = false;
        this.showForm = false;
      });
    } else {
      this.cs.addCustomer(formData).subscribe(() => {
        this.getAllCustomers();
        this.customerForm.reset();
        this.showForm = false;
      });
    }
  }

  editCustomer(cust: any) {
    this.customerForm.patchValue(cust);
    this.selectedId = cust._id;
    this.isEdit = true;
    this.showForm = true;
  }

  deleteCustomer(id: string) {
    this.cs.deleteCustomer(id).subscribe(() => {
      this.getAllCustomers();
    });
  }

  openForm() {
    this.customerForm.reset();
    this.isEdit = false;
    this.showForm = true;
  }

  closeForm() {
    this.customerForm.reset();
    this.isEdit = false;
    this.showForm = false;
  }

  decodeToken() {
    const token = this.auth.getToken();
    if (!token) return null;
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Token decode failed:', e);
      return null;
    }
  }
}
