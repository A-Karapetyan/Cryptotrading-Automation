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

    constructor(
        public authStorage: AuthStorage,
        private authService: AuthService,
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
    }

    openLoginModal() {
        this.authService.openSignInModal();
    }
}
