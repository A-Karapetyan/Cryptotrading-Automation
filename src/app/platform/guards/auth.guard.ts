import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStorage } from '../storages/auth.storage';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authStorage: AuthStorage,
    private router: Router,
    ) {}

  canActivate(
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authStorage.getTokenFromStorage()) {
      return true;
    } 
      this.router.navigate(['']);
      return false;
    
  }
}
