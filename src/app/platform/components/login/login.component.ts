import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@platform/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('frame') frame: any;
  validatingForm: FormGroup;

  constructor(private authService: AuthService) {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  ngAfterViewInit(): void {
    this.frame.show();
  }

  close() {
    this.frame.hide();
    this.authService.closeSignInModal();
  }

  openSignUp() {
    this.authService.closeSignInModal();
    this.authService.openSignUpModal();
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

}
