import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent {

  usuario: Object;
  email: string;
  nickname: string;
  name: string;
  picture: string;

  constructor( public auth: AuthService ){
    this.auth.user$.subscribe( (usuario: Object) => {
      console.log(usuario);

      this.usuario = usuario;

      this.email = usuario['email'];
      this.nickname = usuario['nickname'];
      this.name = usuario['name'];
      this.picture = usuario['picture'];
    });
  }

}


interface Usuario {
  email: string;
  nickname: string;
  name: string;
  picture: string;
}
