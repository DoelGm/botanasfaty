import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-oferts',
  imports: [CommonModule],
  templateUrl: './carrusel-oferts.component.html',
  styleUrl: './carrusel-oferts.component.css'
})
export class CarruselOfertsComponent {

   productos = [
    { nombre: 'Gomitas', imagen: 'assets/img/gomitas.jpg' },
    { nombre: 'Chocolates', imagen: 'assets/img/chocolates.jpg' },
    { nombre: 'Paletas', imagen: 'assets/img/paletas.jpg' },
  ];

  dulces = Array.from({ length: 30 }).map(() => ({
    emoji: ['🍬', '🍫', '🍭', '🍪', '🍩'][Math.floor(Math.random() * 5)],
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
  }));
}
