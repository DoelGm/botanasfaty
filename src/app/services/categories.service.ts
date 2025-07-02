import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 private apiUrl = 'https://api.example.com/products'; // Reemplaza con tu URL de API real

  constructor(private http: HttpClient) { }
getAllCategories() {
  return this.http.get<any[]>(this.apiUrl);
}

}
