import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private static BASE_URL = 'https://api.witpoc.com/users';

  token: string;
// rebd le token disponible sans avoir à le passer en paramètres à chaque fois que je
// souhaite m'en servir.
  setToken(token: string) {
    this.token = token;
  }
  // Pour que ma requête HTTP fonctionne avec le token, je dois ajouter à ce dernier
  // un "header". "head" pour "tête". C'est comme si j'ajoutais un bonnet sur ma tête.
  // Ce bonnet peut avoir plusieurs matières (plusieurs types) : laine, tissu, etc...
  // Ici, le header est de type "authorization", lui même de type 'Baerer'.
  // Enfin, tout comme après la tête vient de le corps, après le header de type authorization de type Baerer,
  // Vient le token "this.token".
  // Je termine en retournant ma fonction qui permet de GET "http://url/me/mytoken/"
  getCurrentUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token
      })
    };
    return this.http.get(UserService.BASE_URL + '/me', httpOptions);
  }


}
