import { Component, OnInit } from '@angular/core';
import { TransactionTypeEnum } from '@app/global/enums/operation-type.enum';
import { DropdownModel } from '@app/global/models/select';

@Component({
    selector: 'app-my-symptoms',
    templateUrl: './my-symptoms.component.html',
    styleUrls: ['./my-symptoms.component.scss']
})
export class MySymptomsComponent implements OnInit {

    email: string = 'akaryan9991@gmail.com';
    rowValue: number = 1;
    criteriasList = [{image: 'https://bitcoin.org/img/icons/opengraph.png?1648318071', name: 'BTC', value: 1, price: 10000}, {image: 'https://bitcoin.org/img/icons/opengraph.png?1648318071', name: 'BTC', value: 1, price: 10000}];
    symptomsList = [];
    operationsList = [{name: '>', value: 1}, {name: '<', value: 2}];
    TransactionTypeEnum = TransactionTypeEnum;

    constructor() { }

    ngOnInit(): void {
        this.symptomsList.push({criterias: this.criteriasList, name: 'Name'});
        
    }

}
