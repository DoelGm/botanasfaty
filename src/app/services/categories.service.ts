import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 private apiUrl = `${environment.apiUrl}/categories`;

 constructor( private http: HttpClient) {}
  getAllCategories(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

  getCategory(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
