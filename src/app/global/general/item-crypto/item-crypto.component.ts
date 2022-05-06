import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoItemModel } from '@app/global/models/crypto-item.model';
import { AuthService } from '@platform/services/auth.service';
import { AuthStorage } from '@platform/storages/auth.storage';

@Component({
  selector: 'app-item-crypto',
  templateUrl: './item-crypto.component.html',
  styleUrls: ['./item-crypto.component.scss']
})
export class ItemCryptoComponent implements OnInit {

    @Input() item: CryptoItemModel;

    constructor(private router: Router, private authStorage: AuthStorage, private authService: AuthService) { }

    ngOnInit(): void {
    }

    cryptoItemClicked(id: number) {
      if (this.authStorage.getLoggedInState()) {
        this.router.navigate(['/details/' + id]);
      } else {
        this.authService.openSignInModal();
      }
    }
}
