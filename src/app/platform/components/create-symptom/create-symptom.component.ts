import { Component, OnInit } from '@angular/core';
import { TransactionTypeEnum } from '@app/global/enums/operation-type.enum';

@Component({
  selector: 'app-create-symptom',
  templateUrl: './create-symptom.component.html',
  styleUrls: ['./create-symptom.component.scss']
})

export class CreateSymptomComponent implements OnInit {

    email: string = 'akaryan9991@gmail.com';
    cryptosList = [{image: 'https://bitcoin.org/img/icons/opengraph.png?1648318071', name: 'BTC', value: 1, price: 10000}, {image: 'https://bitcoin.org/img/icons/opengraph.png?1648318071', name: 'BTC', value: 1, price: 10000}];
    symptomsList = [];
    criterias = [1];
    operationsList = [{name: '>', value: 1}, {name: '<', value: 2}];
    TransactionTypeEnum = TransactionTypeEnum;

    constructor() { }

    ngOnInit(): void {
        this.symptomsList.push({criterias: this.cryptosList});
        
    }

    addCriteriaRow(index: number) {
        this.criterias.push(index);
    }

    deleteCriteria(index: number) {
        debugger
        this.criterias.splice(index, 1);
    }

}
