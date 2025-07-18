import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-offers-carousel',
  imports: [CommonModule, CarouselModule],
  templateUrl: './product-offers-carousel.component.html',
  styleUrl: './product-offers-carousel.component.css'
})
export class ProductOffersCarouselComponent implements OnInit, OnDestroy {
  products: any = [];
  isLoading: boolean = true;
  alertMessage: string = '';
  private routeSub: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    margin: 20, 
    nav: true,
    dots: true,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    },
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };

  constructor(
    private router: Router,
    private productService: ProductService
  ) {
    // Configura la estrategia de recarga
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getAllProducts();  // Llamamos para obtener los productos al azar
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        // Seleccionamos 10 productos aleatorios
        this.products = this.getRandomProducts(res, 10);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al obtener productos', err);
        this.isLoading = false;
      },
    });
  }

  // Función para seleccionar productos aleatorios
  getRandomProducts(products: any[], num: number): any[] {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  navigateToProduct(id: number): void {
    this.router.navigate(['/product', id]).then(() => window.scrollTo(0, 0));
  }
}
