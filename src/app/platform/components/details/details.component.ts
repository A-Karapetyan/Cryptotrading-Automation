import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    price: Number = 100000;
    title: String = 'BTC';
    image: String = 'https://bitcoin.org/img/icons/opengraph.png?1648318071';

    constructor() { }

    ngOnInit(): void {
    }

}
