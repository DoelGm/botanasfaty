import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/public/header/header.component';
import { FooterComponent } from '../../components/public/footer/footer.component';

@Component({
  selector: 'app-public-layouts',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
    template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `
})
export class PublicLayoutsComponent {

}
