import { Injectable } from '@angular/core';
import { IOptions } from '@platform/interfaces/options.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@platform/classes/http-client';
import { IHttpOptions } from '@platform/interfaces/http-options.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail: string = null;

  signInModal$: Subject<any> = new Subject<any>();
  signUpModal$: Subject<any> = new Subject<any>();
  verifyModal$: Subject<any> = new Subject<any>();

  loggedInState$ = new BehaviorSubject<boolean>(undefined);

  newUserId: number;
  savedPassword: string = '';
  savedEmail: string = '';

  private defaultHeaders = {
		Accept : 'application/json',
	};

  public options: IHttpOptions = {
		headers: new HttpHeaders(this.defaultHeaders),
		observe: null,
		params: null,
		responseType: 'json',
		withCredentials: null,
	};
  
  private contoller = 'User';
  public httpOptions: IOptions;

  protected httpClient: HttpClient;
	constructor(
    public http: HttpService,
    ) {
    this.httpClient = new HttpClient(this);
    
  }

  registerEmail(email: string): Observable<any> {
    return this.httpClient.post(`${this.contoller}/RegisterEmail`, null, { email: email });
  }

  registerUser(): Observable<any> {
    if (this.savedEmail && this.savedPassword && this.newUserId) {
      return this.httpClient.post(`${this.contoller}/Register`, null, { email: this.savedEmail, password: this.savedPassword, id: this.newUserId });
    }
  }

  verifyEmail(code: string): Observable<any> {
    if (this.newUserId) {
      return this.httpClient.post(`${this.contoller}/VerifyEmail`, null, { code: code, id: this.newUserId });
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.contoller}/Login`, null, { email: email, password: password });
  }

  openSignInModal() {
    this.signInModal$.next(true);
  }

  getUserEmail() {
    return this.userEmail ? this.userEmail : '';
  }

  closeSignInModal() {
    this.signInModal$.next(false);
  }

  closeVerifyModal() {
    this.verifyModal$.next(false);
  }

  openVerifyModal() {
    this.verifyModal$.next(true);
  }

  openSignUpModal() {
    this.signUpModal$.next(true);
  }

  closeSignUpModal() {
    this.signUpModal$.next(false);
  }

  setUserEmail(email: string) {
    this.userEmail = email;
  }
}
