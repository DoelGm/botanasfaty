import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOffersCarouselComponent } from './product-offers-carousel.component';

describe('ProductOffersCarouselComponent', () => {
  let component: ProductOffersCarouselComponent;
  let fixture: ComponentFixture<ProductOffersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOffersCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOffersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
