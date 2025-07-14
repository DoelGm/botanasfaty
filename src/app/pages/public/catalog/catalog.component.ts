import { Component, ViewChild } from '@angular/core';
import { ButtonCategoryComponent } from '../../../components/public/button-category/button-category.component';
import { CardProductComponent } from '../../../components/public/card-product/card-product.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  imports: [ButtonCategoryComponent, CardProductComponent]
})
export class CatalogComponent {
  @ViewChild('card') card!: CardProductComponent;
  selectedCategoryName: string = 'Todos los productos';

  onCategorySelected(category: { id: number, name: string }) {
    this.card.filterByCategory(category.id);
    this.selectedCategoryName = category.name;
  }
}
