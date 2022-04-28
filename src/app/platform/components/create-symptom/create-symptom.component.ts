import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationTypeEnum } from '@app/global/enums/operation-type.enum';
import { CriteriaCreateRM } from '@app/global/models/criteria-create.model';
import { DropdownModel } from '@app/global/models/select';
import { SymptomCrateRM } from '@app/global/models/symptom-create.model';
import { CryptoService } from '@platform/services/crypto.service';
import { SymptomService } from '@platform/services/symptom.service';

@Component({
  selector: 'app-create-symptom',
  templateUrl: './create-symptom.component.html',
  styleUrls: ['./create-symptom.component.scss']
})

export class CreateSymptomComponent implements OnInit {

    email: string = 'akaryan9991@gmail.com';
    cryptosList = [];
    operationsList = [{name: '>', value: 1}, {name: '<', value: 2}];
    OperationTypeEnum = OperationTypeEnum;
    symptomCreateRM = new SymptomCrateRM()

    constructor(private cryptoService: CryptoService, private symptomSymptom: SymptomService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.cryptoService.getCryptos().subscribe(data => {
            data.forEach(el => {
               this.cryptosList.push(new DropdownModel(el.name, el.id, el.image));
            });
        });

        const cryptoId = +this.activatedRoute.snapshot.params.id;

        if (cryptoId) {
            this.symptomCreateRM.criterias[0].cryptoId = cryptoId;
        }
    }

    makeAmountNumber(item: CriteriaCreateRM) {
        if (item.amount) {
            item.amount = +item.amount;
        }
    }

    addCriteriaRow() {
        this.symptomCreateRM.criterias.push(new CriteriaCreateRM());
    }

    deleteCriteria(index: number) {
        this.symptomCreateRM.criterias.splice(index, 1);
    }

    createSymptom() {
        if (!this.symptomCreateRM.validate()) {
            return;
        }
        this.symptomSymptom.create(this.symptomCreateRM).subscribe(res => {
            console.log(res);
        })
    }
}
