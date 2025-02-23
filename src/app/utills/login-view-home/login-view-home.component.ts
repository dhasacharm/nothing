import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-login-view-home',
  templateUrl: './login-view-home.component.html',
  styleUrl: './login-view-home.component.css'
})
export class LoginViewHomeComponent {
  loginForm: FormGroup;

  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private authService: LoginService) {
    // Initialize form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // email is required and should be a valid email
      password: ['', [Validators.required, Validators.minLength(6)]] // password is required and at least 6 characters
    });
  }

  closeFieldError(controlName: string) {
    this.loginForm.controls[controlName].markAsUntouched();
  }
  closeError() {
    this.errorMessage = '';
  }

  // Submit the form
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.authService.login(this.loginForm.value['email'],this.loginForm.value['password']).subscribe(
        (response) => {
          // Save token and handle successful login
          this.authService.saveToken(response.token);
          // Navigate to a different page or show a success message
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']);

        },
        (error) => {
          // Handle error (e.g., show an error message to the user)
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.error('Login error', error);
        }
      );
    } else {
      this.markFormGroupTouched(this.loginForm)
      console.log('Form is not valid');
    }
  }
   // ✅ Function to Mark Invalid Fields as Touched
   markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control); // Recursively check nested forms
      } else {
        control?.markAsTouched(); // Mark field as touched to show errors
      }
    });
  }
}
