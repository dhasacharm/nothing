import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
      console.log('Form is not valid');
    }
  }

  account = {
    username: '',
    password: ''
  };
  passwordVisible = false;



  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const inputPass = document.getElementById('pass') as HTMLInputElement;
    if (inputPass.type === 'password') {
      inputPass.type = 'text';
    } else {
      inputPass.type = 'password';
    }
  }

  showForgotPassword() {
    const signInDiv = document.getElementById('signindiv');
    if (signInDiv) {
      signInDiv.style.display = 'none';
    }
    const forgetPasswordDiv = document.getElementById('forgetpassworddiv');
    if (forgetPasswordDiv) {
      forgetPasswordDiv.style.display = 'inline-block';
    }
  }

  showLogin() {
    const signInDiv = document.getElementById('signindiv');
    if (signInDiv) {
      signInDiv.style.display = 'inline-block';
    }
    const forgetPasswordDiv = document.getElementById('forgetpassworddiv');
    if (forgetPasswordDiv) {
      forgetPasswordDiv.style.display = 'none';
    }
  }

  currentSlide(n: number) {
    // Implement slide logic here
  }
}
