import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  private _userApiService: UserApiService = inject(UserApiService);
  user: User = new User("", "", "");

  onSubmit(): void {
    const userId = Math.floor(Math.random() * 1000).toString();
    this.user.id = userId;
    this._userApiService.post$(this.user);
  }
}