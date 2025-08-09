import { Component } from '@angular/core';
import { HomeUserComponent } from "../../../components/user/home-user/home-user.component";


@Component({
  selector: 'app-users',
  imports: [HomeUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
