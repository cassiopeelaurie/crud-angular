import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private _http: HttpClient = inject(HttpClient);
  private readonly _BASE_API_URL: string = "http://localhost:3000/";

  getAll$(): Observable<User[]> {
    return this._http.get<User[]>(this._BASE_API_URL + "users");
  }

  post$(user: User): void {
    this._http.post<User>(this._BASE_API_URL + "users", user).subscribe();
  }

  update$(user: User): void {
    this._http.put<User>(this._BASE_API_URL + "users/" + user.id, user).subscribe(); 
  }

  delete$(userID: string): void {
    this._http.delete<void>(this._BASE_API_URL + "users/" + userID).subscribe();
  }
  
}