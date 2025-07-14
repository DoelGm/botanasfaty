import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
@Component({
  selector: 'app-new-product',
  standalone: true, // ✅ ¡Esto es obligatorio en standalone components!
  imports: [CommonModule, FormsModule, QuillModule ],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'] // corregido: "styleUrl" → "styleUrls"
})
export class NewProductComponent {
  successMessage: string | null = null;

  product = {
    name: '',
    description: '',
    category_id: '',
    stock: 0,
    price: 0,
    discount: 0,
    images: [] as File[]
  };

  imagePreviews: string[] = [];

  categories = [
    { id: 1, name: 'Ropa' },
    { id: 2, name: 'Accesorios' },
    { id: 3, name: 'Otros' }
  ];

  /**
   * Maneja la carga de imágenes y genera vistas previas.
   */
  onImageChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.product.images[index] = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviews[index] = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Acción al enviar el formulario.
   */
  addProduct(): void {
    console.log('Producto creado:', this.product);
    this.successMessage = 'Producto creado exitosamente ✅';

    // Limpieza opcional después de crear
    // this.product = { ... }; // reiniciar valores
    // this.imagePreviews = [];
  }
}
