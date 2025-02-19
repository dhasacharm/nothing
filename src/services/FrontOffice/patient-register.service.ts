import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientRegisterService {
private apiUrl = environment.API_URL;  // Using the API URL from environment
  private patientEndpoint = 'patients';  // The login endpoint
  constructor(private http: HttpClient) { }

  registerPatient(patientData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}${this.patientEndpoint}`, patientData, { headers });
  }}
