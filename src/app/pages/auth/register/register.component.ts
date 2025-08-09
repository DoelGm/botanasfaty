import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';

  errors: any = {}; 
  generalError: string = '';
  generalSuccess: string = '';

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  onRegister() {
    this.generalError = '';
    this.generalSuccess = '';
    this.errors = {};

    if (this.password !== this.password_confirmation) {
      this.generalError = 'Las contraseñas no coinciden';
      return;
    }

    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    };

    this.registerService.register(userData).subscribe({
      next: (res) => {
        this.generalSuccess = 'Registro exitoso. Redirigiendo...';
        setTimeout(() => this.router.navigate(['/user']), 2000);
      },
      error: (err) => {
        if (err.status === 422) {
          this.generalError = 'Error: Revisa los datos del formulario.';
          this.errors = err.error.errors;
        } else {
          this.generalError = 'Error al registrarse. Intenta más tarde.';
        }
      }
    });
  }
}
