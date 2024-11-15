import { Component, inject } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { User } from '../../models/UserModel.form';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  private _userApiService: UserApiService= inject(UserApiService);

_users$!: Observable<User>;

user: User = {
  id: '',
  username: '',
  email: ''
};

onCreate() {
  this._userApiService.postUser$(this.user).subscribe({
    next: (createdUser) => {
      console.log('User created:', createdUser);
      this.user = { id: '', username: '', email: '' }; 
    },
    error: (error) => {
      console.error('Error creating user:', error);
    }
  });
}
}
