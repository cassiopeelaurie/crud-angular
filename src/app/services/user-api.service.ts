import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/UserModel.form';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private _httpClient: HttpClient = inject(HttpClient);

  private readonly _BASE_API_URL_: string = "http://localhost:3000/users";

  constructor() {}

  getUsers$(): Observable<User[]> {
    return this._httpClient.get<User[]>(this._BASE_API_URL_);
  }

  postUser$(user: User): Observable<User> {
    return this._httpClient.post<User>(this._BASE_API_URL_, user);
  }

  updateUser$(user: User): Observable<User> {
    return this._httpClient.put<User>(this._BASE_API_URL_, user);
  }

  deleteUser$(): Observable<User> {
    return this._httpClient.delete<User>(this._BASE_API_URL_);
  }
}
