import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@platform/services/auth.service';
import { HttpOptionsService } from '@platform/services/http-options.service';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStorage {

  private readonly storageTokenKey: string = 'auth-token';
  private loggedInState = new BehaviorSubject<boolean>(undefined);

  constructor(
    private httpOptionsService: HttpOptionsService,
    private authService: AuthService,
    private router: Router,
 
  ) {
    this.setAuth(this.getTokenFromStorage());
  }

  public saveTokenInStorage(token: string): void {
    localStorage.setItem(this.storageTokenKey, token);
    this.authService.loggedInState$.next(true);
  }

  public getTokenFromStorage(): string | null {
    return localStorage.getItem(this.storageTokenKey);
  }

  public removeTokenStorage(): void {
    localStorage.removeItem(this.storageTokenKey);
  }

  public getLoggedInState() {
    return this.loggedInState.value;
  }

  private setAuth(token: string): void {
    if (token) {
      this.httpOptionsService.setAuth(token);
      this.loggedInState.next(true);
    }
  }

  public login(email: string, pass: string) {
    return this.authService.login(email, pass)
      .pipe(
        tap((res) => {
          this.setAuth(res.token);
          this.saveTokenInStorage(res.token);
          location.reload();
        })
      );
  }

  public logout() {
    this.removeTokenStorage();
    this.httpOptionsService.removeAuth();
    this.authService.loggedInState$.next(false);
    this.router.navigate(['/', 'home']);
    setTimeout(() => {
      location.reload();
    })
  }

}
