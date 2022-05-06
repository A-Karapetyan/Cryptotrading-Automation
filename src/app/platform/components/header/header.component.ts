import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@platform/services/auth.service';
import { AuthStorage } from '@platform/storages/auth.storage';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    currentRoute: String = '';
    loginState: boolean = false;
    userEmail: string = '';

    constructor(
        public authStorage: AuthStorage,
        public authService: AuthService,
        public router: Router,

    ) {
        router.events.pipe(event => event)
            .subscribe((event: NavigationEnd) => {
                if (event instanceof NavigationEnd) {
                    this.currentRoute = event.url;
                }

            });
    }   
    ngOnInit(): void {

        this.authService.loggedInState$.subscribe(state => {
            this.loginState = state;
            this.userEmail = this.authService.getUserEmail();
        });

        this.loginState = this.authStorage.getLoggedInState();
    }

    logout() {
        this.authStorage.logout();
    }

    openLoginModal() {
        this.authService.openSignInModal();
    }
}
