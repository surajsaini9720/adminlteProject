// src/app/components/users/user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  userForm!: FormGroup;
  isEdit = false;
  selectedUserId: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadUsers();
  }

  initForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['Staff', Validators.required],
      status: ['active', Validators.required]
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe((res: any[]) => {
      this.users = res;
    });
  }

  onSubmit() {
    if (this.userForm.invalid) return;

    if (this.isEdit && this.selectedUserId) {
      this.userService.updateUser(this.selectedUserId, this.userForm.value).subscribe(() => {
        this.loadUsers();
        this.resetForm();
      });
    } else {
      this.userService.createUser(this.userForm.value).subscribe(() => {
        this.loadUsers();
        this.resetForm();
      });
    }
  }

  editUser(user: any) {
    this.userForm.patchValue(user);
    this.selectedUserId = user._id;
    this.isEdit = true;
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  resetForm() {
    this.userForm.reset({ role: 'Staff', status: 'active' });
    this.selectedUserId = null;
    this.isEdit = false;
  }
}
