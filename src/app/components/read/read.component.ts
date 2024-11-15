import { Component, inject } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { User } from '../../models/UserModel.form';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  private _userApiService: UserApiService = inject(UserApiService);

  users$!: Observable<User[]>; 

  ngOnInit() {
    this.users$ = this._userApiService.getUsers$();
  }
}
