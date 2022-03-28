import { Component, OnInit } from '@angular/core';
import { AuthService } from '@platform/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isOpenLoginState: boolean;
  public isOpenSignUpState: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.signInModal$.subscribe((isOpen: boolean) => {
      this.isOpenLoginState = isOpen;
    });
    this.authService.signUpModal$.subscribe((isOpen: boolean) => {
      this.isOpenSignUpState = isOpen;
    });
  }
}
