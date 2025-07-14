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
  alertMessage: string = '';
  private routeSub: any;

  customOptions: OwlOptions = {
  loop: true,
  autoplay: true,
  margin: 20, // Aumenté el margen para mejor visualización
  nav: true,
  dots: true,
  navText: ['‹', '›'],
  responsive: {
    0: { items: 1 },
    600: { items: 2 }, // Cambié 640 a 600 para mejor respuesta
    1000: { items: 3 } // Cambié 1024 a 1000
  },
  autoplayTimeout: 3000,
  autoplayHoverPause: true
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
  this.isLoading = true; // Asegurarse de que isLoading empiece en true
  const fixedCategoryId = 1;
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
  this.similarProducts = products;
  this.isLoading = false;

  if (products.length === 0) {
    this.alertMessage = 'No hay productos disponibles';
  }
},
    error: (err) => {
      console.error('Error loading similar products', err);
      this.isLoading = false;
    }
  });
  
}

navigateToProduct(id: number): void {
  this.router.navigate(['/product', id]).then(() => window.scrollTo(0, 0));
}

  
}
