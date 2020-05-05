import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem(UserService.TOKEN);
   }
  private static BASE_URL = 'https://api.witpoc.com/users';
  private static TOKEN = 'userToken';
  token: string;
  user: any;

  setToken(token: string) {
    localStorage.setItem('userToken', token);
    this.token = token;
  }
  getCurrentUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token
      })
    };
    return this.http.get(UserService.BASE_URL + '/me', httpOptions)
      .pipe(tap((user) => this.user = user));
  }
}
