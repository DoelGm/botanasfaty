import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WelcomeComponent } from "../../../components/public/welcome/welcome.component";
import { ProductCarouselComponent } from "../../../components/public/product-carousel/product-carousel.component";
import { AboutUsComponent } from "../../../components/public/about-us/about-us.component";
import { ProductOffersCarouselComponent } from "../../../components/public/product-offers-carousel/product-offers-carousel.component";
import { CategoryCarouselComponent } from '../../../components/public/category-carousel/category-carousel.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [WelcomeComponent, ProductCarouselComponent, AboutUsComponent, CategoryCarouselComponent, ProductOffersCarouselComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isBrowser = false;

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(platformId);
}

}
