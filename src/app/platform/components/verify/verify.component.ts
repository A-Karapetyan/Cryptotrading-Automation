import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@platform/services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements AfterViewInit {
  @ViewChild('frame') frame: any;
  validatingForm: FormGroup;

  constructor(private authService: AuthService) {
    this.validatingForm = new FormGroup({
      verifyEmailCode: new FormControl('', Validators.minLength(6)),
    });
  }

  ngAfterViewInit(): void {
    this.frame.show();
  }

  close() {
    this.authService.closeVerifyModal();
  }

  verify() {
    const code = this.validatingForm.get('verifyEmailCode').value;

    if (!code) return;

    return this.authService.verifyEmail(code).subscribe((res) => {

      if (res === true) {
        this.authService.registerUser().subscribe(token => {
          location.reload();
          this.close();
        });
      }
    });
  }

  get verifyEmailCode() {
    return this.validatingForm.get('verifyEmailCode');
  }

}
