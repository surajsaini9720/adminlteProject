// src/app/components/transaction/transaction.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-transaction',
  standalone: false,
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactionForm!: FormGroup;
  transactions: any[] = [];
  isEdit = false;
  selectedId = '';
  showForm = false;
  userId = '123456789'; // Replace later with actual auth userId

  constructor(private fb: FormBuilder, private ts: TransactionService) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      money: [''],
      type: ['credit'],
      customerId: [''],
      userId: [this.userId]
    });

    this.getAllTransactions();
  }

  getAllTransactions() {
    this.ts.getTransactions(this.userId).subscribe(res => {
      this.transactions = res;
    });
  }

  onSubmit() {
    const formData = this.transactionForm.value;

    if (this.isEdit) {
      this.ts.updateTransaction(this.selectedId, formData).subscribe(() => {
        this.getAllTransactions();
        this.resetForm();
      });
    } else {
      this.ts.addTransaction(formData).subscribe(() => {
        this.getAllTransactions();
        this.resetForm();
      });
    }
  }

  editTransaction(txn: any) {
    this.transactionForm.patchValue(txn);
    this.selectedId = txn._id;
    this.isEdit = true;
    this.showForm = true;
  }

  deleteTransaction(id: string) {
    this.ts.deleteTransaction(id).subscribe(() => {
      this.getAllTransactions();
    });
  }

  closeForm() {
    this.showForm = false;
    this.resetForm();
  }

  resetForm() {
    this.transactionForm.reset({ userId: this.userId });
    this.isEdit = false;
  }
}
