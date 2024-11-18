import { Component } from '@angular/core';
import { ListUserComponent } from '../../components/read/list-user.component';
import { CreateUserComponent } from '../../components/create/create-user.component';



@Component({
  selector: 'app-user-management-page',
  standalone: true,
  imports: [CreateUserComponent, ListUserComponent],
  templateUrl: './user-management-page.html',
  styleUrl: './user-management-page.css',
})
export class CrudPageComponent{

}
