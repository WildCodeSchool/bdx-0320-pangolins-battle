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
  private static BASE_URL = 'https://api.witpoc.com/users/me';
  private static TOKEN = 'userToken';
  token: string;
  user: any;

  setToken(token: string) {
    localStorage.setItem('userToken', token);
    this.token = token;
  }

  removeToken(){
    localStorage.removeItem(this.token);
  }

  getCurrentUser(): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token
      })
    };
    return this.http.get<User>(UserService.BASE_URL, httpOptions)
      .pipe(tap((user) => this.user = user));
  }
}
