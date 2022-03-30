import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStorage {

  private readonly storageTokenKey: string = 'auth-token';
  private loggedInState = new BehaviorSubject<boolean>(undefined);


  public saveTokenInStorage(token: string): void {
    localStorage.setItem(this.storageTokenKey, token);
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

}
