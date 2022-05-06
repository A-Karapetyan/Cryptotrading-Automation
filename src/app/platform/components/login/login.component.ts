import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToasterEnum } from '@app/global/enums/toaster-type.enum';
import { AuthService } from '@platform/services/auth.service';
import { ToasterService } from '@platform/services/toaster.service';
import { AuthStorage } from '@platform/storages/auth.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('frame') frame: any;
  validatingForm: FormGroup;
  isOpen: boolean = true;

  constructor(private authService: AuthService, private authStorage: AuthStorage, private toasterService: ToasterService) {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  ngAfterViewInit(): void {
    this.frame.show();
  }

  close() {
    this.isOpen = false;
    this.authService.closeSignInModal();
  }

  openSignUp() {
    this.authService.closeSignInModal();
    this.authService.openSignUpModal();
  }

  isInvalid(): boolean {
    const email = this.validatingForm.get('loginFormModalEmail');
    const pass = this.validatingForm.get('loginFormModalPassword');

    return !!email.errors || !!pass.errors || !email.value || !pass.value;
  }

  login() {
    if (this.isInvalid()) {
      return;
    } 

    const email = this.validatingForm.get('loginFormModalEmail');
    const pass = this.validatingForm.get('loginFormModalPassword');

    return this.authStorage.login(email.value, pass.value).subscribe(res => {
      this.authStorage.saveTokenInStorage(res.token);
      this.authService.setUserEmail(res.email);
      this.close();
    }, err => { 
      this.toasterService.showNotification('Invalid Email Or Password', ToasterEnum.Error);
      console.log(err);
    });
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

}
