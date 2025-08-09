import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

 this.http.post<any>(`${environment.apiUrl}/login`, credentials).subscribe({
  next: (response) => {
    localStorage.setItem('userId', response.user.id);
    localStorage.setItem('token', response.token);

    // Redirigir según el rol
    if (response.user.role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }
  },
  error: (error) => {
    alert('Credenciales incorrectas');
  }
});

  }
}

