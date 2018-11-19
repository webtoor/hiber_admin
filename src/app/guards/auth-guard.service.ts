import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable(/* {
  providedIn: 'root'
} */)
export class AuthGuardService implements CanActivate  {

  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(): boolean {
    if (this._authService.isAuthenticated()) {
        return true;
    }

       // navigate to login page
       this._router.navigate(['/login']);
       // you can save redirect url so after authing we can move them back to the page they requested
       return false;
  }
}
