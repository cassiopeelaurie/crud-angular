import { Component, inject } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { AsyncPipe } from '@angular/common';
import { ClonePipe } from '../../../core/clone.pipe';
import { DeleteUserComponent } from "../delete/delete-user.component";
import { UpdateUserComponent } from '../update/update-user.component';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [AsyncPipe, ClonePipe, DeleteUserComponent, UpdateUserComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {

  private _userApiService: UserApiService = inject(UserApiService);
  users$: Observable<User[]> = this._userApiService.getAll$();

}