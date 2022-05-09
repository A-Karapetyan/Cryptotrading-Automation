import { Component, OnInit } from '@angular/core';
import { CryptoService } from '@platform/services/crypto.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public data = [];
    public filteredData = [];
    public searchText: string = '';
    private cryptoService: CryptoService;

    constructor(cryptoService: CryptoService) {
        this.cryptoService = cryptoService;
    }

    ngOnInit(): void {
        this.cryptoService.getCryptos().subscribe(data => {
            this.data = data;
            this.filteredData = data;
        });
    }

    search(text: string) {
        this.filteredData = this.data.filter(el => el.name.toUpperCase().includes(text.toUpperCase()))
    }
}
