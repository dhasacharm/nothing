import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.API_URL;  // Using the API URL from environment
  private loginEndpoint = 'auth/login';  // The login endpoint

  constructor(private http: HttpClient) { }

  // Login method to authenticate the user
  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}${this.loginEndpoint}`, body)
      .pipe(
        catchError(this.handleError) // Handle errors
      );
  }

  // Save the token to localStorage or sessionStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token); // or sessionStorage.setItem if you prefer
  }

  // Get the token from localStorage/sessionStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove the token from localStorage/sessionStorage (logout)
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Handle errors
  private handleError(error: any): Observable<never> {
    console.error('Login error', error);
    throw new Error('An error occurred while trying to log in.');
  }
  
}
