import { Component } from '@angular/core';
import { CarruselOfertsComponent } from "../../../components/public/carrusel-oferts/carrusel-oferts.component";
import { OfertsProductComponent } from "../../../components/public/oferts-product/oferts-product.component";

@Component({
  selector: 'app-oferts',
  imports: [CarruselOfertsComponent, OfertsProductComponent],
  templateUrl: './oferts.component.html',
  styleUrl: './oferts.component.css'
})
export class OfertsComponent {

}
