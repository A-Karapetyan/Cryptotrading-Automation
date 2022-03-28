import { Component, OnInit } from '@angular/core';
import { AuthService } from '@platform/services/auth.service';
import { AuthStorage } from '@platform/storages/auth.storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authStorage: AuthStorage,
    private authService: AuthService,
    
    ) { }

  ngOnInit(): void {
  }

  openLoginModal() {
    this.authService.openSignInModal();
  }
}
