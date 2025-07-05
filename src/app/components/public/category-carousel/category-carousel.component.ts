import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../../../services/product.service';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-category-carousel',
  imports: [CommonModule, CarouselModule],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css'
})
export class CategoryCarouselComponent implements OnInit, OnDestroy {
  product: any = [];
  category: any = {};
  isLoading: boolean = true;
  similarProducts: any = [];
  private routeSub: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private categorieServices: CategoriesService
  ) {
    // Configura la estrategia de recarga
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

ngOnInit(): void {
  const fixedCategoryId = 1; // <-- Cambia esto por la categoría deseada
  this.loadCategoryData(fixedCategoryId);
}

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  private loadProductData(id: number): void {
    this.isLoading = true;

    this.productService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data;
        console.log('Product data loaded:', this.product);
        this.loadCategoryData(data.category_id);
      },
      error: (err) => {
        console.error('Error loading product', err);
        this.isLoading = false;
      }
    });
  }

  private loadCategoryData(categoryId: number): void {
    this.categorieServices.getCategory(categoryId).subscribe({
      next: (categoryData) => {
        this.category = categoryData;
        this.loadSimilarProducts(categoryId);
      },
      error: (err) => {
        console.error('Error loading category', err);
        this.isLoading = false;
      }
    });
  }

private loadSimilarProducts(categoryId: number): void {
  this.productService.getProductsByCategory(categoryId).subscribe({
    next: (products) => {
      this.similarProducts = products; // sin filtrar
      this.isLoading = false;
    },
    error: (err) => {
      console.error('Error loading similar products', err);
      this.isLoading = false;
    }
  });
}


  // Método para manejar clics en productos similares
  navigateToProduct(id: number): void {
    this.router.navigate(['/product', id])
      .then(() => {
        window.scrollTo(0, 0); // Opcional: scroll al inicio
      });
  }
}
