import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = `${environment.apiUrl}/registerUser`;

  constructor(private http: HttpClient) {}

 register(userData: any): Observable<any> {
  return this.http.post(this.apiUrl, userData);
}
}
