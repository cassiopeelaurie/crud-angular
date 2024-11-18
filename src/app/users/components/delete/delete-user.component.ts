import { Component, inject, Input } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {

  private _userApiService: UserApiService = inject(UserApiService);
  @Input({ required: true }) userID!: string;


  deleteUser(): void {
    this._userApiService.delete$(this.userID);
  }
}