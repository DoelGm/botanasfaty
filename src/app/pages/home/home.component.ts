import { Component } from '@angular/core';
import { WelcomeComponent } from "../../components/public/welcome/welcome.component";
import { ProductCarouselComponent } from "../../components/public/product-carousel/product-carousel.component";
import { AboutUsComponent } from "../../components/public/about-us/about-us.component";
import { CategoryCarouselComponent } from "../../components/public/category-carousel/category-carousel.component";
import { ProductOffersCarouselComponent } from "../../components/public/product-offers-carousel/product-offers-carousel.component";

@Component({
  selector: 'app-home',
  imports: [WelcomeComponent, ProductCarouselComponent, AboutUsComponent, CategoryCarouselComponent, ProductOffersCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
