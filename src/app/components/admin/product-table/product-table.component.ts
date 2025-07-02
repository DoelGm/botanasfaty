import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CategoriesService } from '../../../services/categories.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule, QuillModule, HttpClientModule],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  newImages: { [productId: number]: { [index: number]: File } } = {};
  imagePreviews: { [productId: number]: { [index: number]: string } } = {};

  p = 1;
  itemsPerPage = 10;
  products: any[] = [];
  isLoading = true;
  categories: any[] = [];
  productToEdit: any = null;
  productToDelete: any = null;
  isEditing = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  showDeleteModal: boolean = false;

  private alertTimeout: any;

  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.clearAlerts();
    this.isLoading = true;
    this.productService.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading products', error);
        this.errorMessage = 'Error al cargar los productos';
        this.isLoading = false;
        this.setAlertTimeout('error');
      }
    });
  }

  loadCategories() {
    this.categoriesService.getAllCategories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Error loading categories', error);
        this.errorMessage = 'Error al cargar las categorías';
        this.setAlertTimeout('error');
      }
    });
  }

  prepareEdit(product: any) {
    this.productToEdit = { ...product };
    this.isEditing = true;

    if (!this.imagePreviews[this.productToEdit.id]) {
      this.imagePreviews[this.productToEdit.id] = {};
    }

    if (!this.newImages[this.productToEdit.id]) {
      this.newImages[this.productToEdit.id] = {};
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.productToEdit = null;
    this.newImages = {};
    this.imagePreviews = {};
  }

  onImageChange(event: any, index: number, productId: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (!this.imagePreviews[productId]) {
          this.imagePreviews[productId] = {};
        }
        this.imagePreviews[productId][index] = reader.result as string;

        if (!this.newImages[productId]) {
          this.newImages[productId] = {};
        }
        this.newImages[productId][index] = file;
      };
      reader.readAsDataURL(file);
    }
  }

  updateProduct() {
    if (!this.productToEdit) return;

    const formData = new FormData();
    const id = this.productToEdit.id;

    formData.append('name', this.productToEdit.name);
    formData.append('description', this.productToEdit.description);
    formData.append('category_id', this.productToEdit.category_id);
    formData.append('stock', this.productToEdit.stock.toString());
    formData.append('price', this.productToEdit.price.toString());
    formData.append('discount', this.productToEdit.discount?.toString() || '');

    if (this.newImages[id]) {
      Object.keys(this.newImages[id]).forEach((index) => {
        formData.append(`images[${index}]`, this.newImages[id][+index]);
      });
    }

    this.productService.updateProduct(id, formData).subscribe({
      next: () => {
        this.successMessage = 'Producto actualizado exitosamente';
        this.setAlertTimeout('success');
        this.isEditing = false;
        this.loadProducts();
        this.newImages[id] = {};
        this.imagePreviews[id] = {};
      },
      error: (error) => {
        console.error('Error al actualizar producto', error);
        this.errorMessage = 'Error al actualizar el producto';
        this.setAlertTimeout('error');
      }
    });
  }

  calculateDiscount(price: number, discountPrice: number): number {
    if (!discountPrice || discountPrice <= price) return 0;
    return Math.round(((discountPrice - price) / price) * 100);
  }

  prepareDelete(product: any) {
    this.productToDelete = product;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (!this.productToDelete) return;

    this.clearAlerts();
    this.productService.deleteProduct(this.productToDelete.id).subscribe({
      next: () => {
        this.successMessage = 'Producto eliminado exitosamente';
        this.setAlertTimeout('success');
        this.loadProducts();
        this.showDeleteModal = false;
        this.productToDelete = null;
        this.showDeleteModal = false;

      },
      error: (error) => {
        console.error('Error al eliminar producto', error);
        this.errorMessage = 'Error al eliminar el producto';
        this.setAlertTimeout('error');
        this.showDeleteModal = false;

      }
    });
  }

  dismissAlert(type: 'success' | 'error') {
    if (type === 'success') {
      this.successMessage = null;
    } else {
      this.errorMessage = null;
    }
    clearTimeout(this.alertTimeout);
  }

  private setAlertTimeout(type: 'success' | 'error') {
    this.alertTimeout = setTimeout(() => {
      this.dismissAlert(type);
    }, 5000);
  }

  private clearAlerts() {
    this.successMessage = null;
    this.errorMessage = null;
    clearTimeout(this.alertTimeout);
  }
}
