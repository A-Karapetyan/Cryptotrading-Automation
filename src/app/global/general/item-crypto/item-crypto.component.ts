import { Component, Input, OnInit } from '@angular/core';
import { CryptoItemModel } from '@app/global/models/crypto-item.model';

@Component({
  selector: 'app-item-crypto',
  templateUrl: './item-crypto.component.html',
  styleUrls: ['./item-crypto.component.scss']
})
export class ItemCryptoComponent implements OnInit {

    @Input() item: CryptoItemModel;

    constructor() { }

    ngOnInit(): void {
    }

}
