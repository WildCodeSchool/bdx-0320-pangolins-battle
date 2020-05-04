import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'btd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidden = true;
  user: User;
  timesOut = true;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  display(timesOut: boolean){
    return this.hidden = timesOut;
  }

  ngOnInit(): void {
    this.display(this.hidden);
// par ce paramMap, je récupère la partie 'token' de l'URL. Je le fais au moment où
// L'utilisateur clique sur "connexion avec mon compte Odyssey".
// Une fois que je l'ai récupéré, je le transmets au service en le donnant à ma fonction "setToken()".
// Cette dernière a pour but de rendre par la suite disponible le token sur l'ensemble du service "userService". Ca permet
// De simplifier les écritures des fonctions. C'est uniquement à des fins pratiques et de simplicité. Ca ne change pas les features.
    this.route.paramMap.subscribe((param) => {
          const token = param.get('token');

          this.userService.setToken(token);

          this.userService.getCurrentUser().subscribe((user: User) => {
            console.log(user);
            this.user = user;
          });
        });
      }

}
