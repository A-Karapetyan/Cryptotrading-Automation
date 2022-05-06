import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@platform/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
  validatingForm: FormGroup;
  @ViewChild('frame') frame: any;

  isOpen: boolean = true;

  constructor(private authService: AuthService) {
    this.validatingForm = new FormGroup({
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.minLength(6)),
    });
  }

  ngAfterViewInit(): void {
    this.frame.show();
  }

  close() {
    this.isOpen = false;
    this.authService.closeSignUpModal();
  }

  openSignIn() {
    this.authService.closeSignUpModal();
    this.authService.openSignInModal();
  }

  register() {

    if (this.isInvalid()) {
      return;
    }

    const email = this.validatingForm.get('signupFormModalEmail');
    const pass = this.validatingForm.get('signupFormModalPassword');

    if (!email.errors && !pass.errors) {

      this.authService.registerEmail(email.value).subscribe(id => {
        this.authService.newUserId = +id;
        this.authService.savedPassword = pass.value;
        this.authService.savedEmail = email.value;
      });

      this.authService.closeSignUpModal();
      this.authService.openVerifyModal();
    }
  }

  isInvalid(): boolean {
    const email = this.validatingForm.get('signupFormModalEmail');
    const pass = this.validatingForm.get('signupFormModalPassword');

    return !!email.errors || !!pass.errors || !email.value || !pass.value;
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }
}
