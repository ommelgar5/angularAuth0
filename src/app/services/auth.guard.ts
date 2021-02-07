import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Auth0
import { AuthService } from '@auth0/auth0-angular';


/*
  Interfaz que una clase puede implementar para ser un guardia que decide si se puede activar una ruta.
  Si todos los guardias regresan true, la navegación continúa. Si algún guardia regresa false,
  la navegación se cancela.

  El guard puede retornar un:
      - Observable<boolean | UrlTree>
      - Promise<boolean | UrlTree>
      - boolean


  En este caso la propiedad auth.isAuthenticated$ retorna un observable de tipo boolean


  NOTA: La clase puede implementar el tipo de Interfaz que puede ser:
      - CanActivate       -> cuando no se ocupa lazy loading
      - CanActivateChild  -> cuando la ruta tiene rutas hijas
      - CanLoad           -> cuado se usa lazy loading
      - CanDeactivate

*/

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth: AuthService ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isAuthenticated$;
  }

}
