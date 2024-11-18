
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  private _userApiService: UserApiService = inject(UserApiService);
  @Input({ required: true }) user!: User;
  
  onSubmit(): void {
    this._userApiService.update$(this.user);
  }
}
