import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoItemModel } from '@app/global/models/crypto-item.model';
import { CryptoService } from '@platform/services/crypto.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    crypto: CryptoItemModel;

    constructor(private cryptoService: CryptoService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.cryptoService.getById(this.activatedRoute.snapshot.params.id).subscribe(res => {
            this.crypto = res;
        })
    }

}
