import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-crypto',
  templateUrl: './item-crypto.component.html',
  styleUrls: ['./item-crypto.component.scss']
})
export class ItemCryptoComponent implements OnInit {

    isActive: Boolean = false;
    price: Number = 100000;
    title: String = 'BTC';
    image: String = 'https://bitcoin.org/img/icons/opengraph.png?1648318071';

    constructor() { }

    ngOnInit(): void {
    }

}
