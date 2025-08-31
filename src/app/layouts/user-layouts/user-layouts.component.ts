import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/public/footer/footer.component';
import { NavUserComponent } from "../../components/user/nav-user/nav-user.component";

@Component({
  selector: 'app-user-layouts',
  imports: [RouterOutlet, FooterComponent, NavUserComponent],
  template: `
  <app-nav-user></app-nav-user>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `
})
export class UserLayoutsComponent {

}
