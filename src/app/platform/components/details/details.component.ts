import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoItemModel } from '@app/global/models/crypto-item.model';
import { CryptoService } from '@platform/services/crypto.service';
import moment from 'moment';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    crypto: CryptoItemModel;
    chartDatasets = [{ data: [], label: '' }];
    chartLabels: Array<string> = [];

    constructor(private cryptoService: CryptoService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.cryptoService.getById(this.activatedRoute.snapshot.params.id).subscribe(res => {
            this.crypto = res;
            
            this.crypto.histories.forEach(el => {
                this.chartDatasets[0].data.push(el.price);
                this.chartLabels.push(moment(moment(el.date)).format('yy-MM-DD HH:mm'));
            });
            this.chartDatasets[0].label = res.name;
        })
    }

}
