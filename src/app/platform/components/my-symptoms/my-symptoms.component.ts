import { Component, OnInit } from '@angular/core';
import { OperationTypeEnum } from '@app/global/enums/operation-type.enum';
import { EditCriteriaRM } from '@app/global/models/edit-criteria.model';
import { DropdownModel } from '@app/global/models/select';
import { AuthService } from '@platform/services/auth.service';
import { CryptoService } from '@platform/services/crypto.service';
import { SymptomService } from '@platform/services/symptom.service';
import { ToasterService } from '@platform/services/toaster.service';

@Component({
    selector: 'app-my-symptoms',
    templateUrl: './my-symptoms.component.html',
    styleUrls: ['./my-symptoms.component.scss']
})
export class MySymptomsComponent implements OnInit {

    email: string = '';
    rowValue: number = 1;
    symptomsList = [];
    operationsList = [{name: '>', value: 1}, {name: '<', value: 2}];
    OperationTypeEnum = OperationTypeEnum;
    cryptosList = [];

    constructor(private symptomService: SymptomService, private toasterService: ToasterService, private cryptoService: CryptoService, private authService: AuthService) { }

    ngOnInit(): void {
        this.getCryptos();
        this.getSymptoms();

        this.email = this.authService.userEmail;

    }

    getSymptoms() {
        this.symptomService.getSymptoms().subscribe(res => {
            this.symptomsList = res;
        })
    }

    getCryptos() {
        this.cryptoService.getCryptos().subscribe(data => {
            data.forEach(el => {
               this.cryptosList.push(new DropdownModel(el.name, el.id, el.image));
            });
        });
    }

    deleteSymptom(id: number) {
        this.symptomService.delete(id).subscribe(res => {
            this.getSymptoms();
        });
    }

    saveSymptomTitle(symptom) {
        if (!symptom.title) {
            symptom.errors = { title: true };
            return;
        }
        this.symptomService.editSymptomTitle(symptom.title, symptom.id).subscribe(res => {
            symptom.errors = { title: false };
            symptom.isEditName = false;
        }, ()=> { this.toasterService.showNotification('Cannot change symptom title') });
    }

    saveCriteriaEdit(criteria) {
        const criteriaRM = new EditCriteriaRM();
        criteriaRM.criteriaId = criteria.id;
        criteriaRM.cryptoId = criteria.crypto.id;
        criteriaRM.operation = criteria.operation;
        criteriaRM.price = criteria.price;

        if (criteriaRM.validate()) {
            this.symptomService.editCriteria(criteriaRM).subscribe(res => {
                criteria.isEdit = false;
                criteria.crypto.image = this.cryptosList.find(cr => cr.value === criteriaRM.cryptoId).image;
            }, ()=> { this.toasterService.showNotification('Cannot update criteria') });
        } else {
            criteria.errors = criteriaRM.errors;
        }

    }
}
