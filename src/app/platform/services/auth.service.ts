import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signInModal$: Subject<any> = new Subject<any>();
  signUpModal$: Subject<any> = new Subject<any>();
  
  constructor() { }

  openSignInModal() {
    this.signInModal$.next(true);
  }

  closeSignInModal() {
    this.signInModal$.next(false);
  }

  openSignUpModal() {
    this.signUpModal$.next(true);
  }

  closeSignUpModal() {
    this.signUpModal$.next(false);
  }
}
