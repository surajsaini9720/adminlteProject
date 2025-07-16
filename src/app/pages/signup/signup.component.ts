import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['Staff', Validators.required],    
      status: ['active', Validators.required], 
      terms: [true, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.errorMessage = 'Please fill all fields correctly.';
      return;
    }

    // Remove `terms` before sending to backend
    const { terms, ...userData } = this.signupForm.value;

    this.auth.signup(userData).subscribe({
      next: () => {
        this.successMessage = 'Signup successful. Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Signup failed!';
      }
    });
  }
}
