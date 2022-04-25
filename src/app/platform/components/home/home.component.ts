import { Component, OnInit } from '@angular/core';
import { CryptoService } from '@platform/services/crypto.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public data = [];
    private cryptoService: CryptoService;

    constructor(cryptoService: CryptoService) {
        this.cryptoService = cryptoService;
    }

    ngOnInit(): void {
        this.cryptoService.getCryptos().subscribe(data => {
            this.data = data;
        });
    }

}
