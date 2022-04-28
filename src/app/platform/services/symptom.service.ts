import { Injectable } from '@angular/core';
import { IOptions } from '@platform/interfaces/options.interface';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@platform/classes/http-client';
import { CryptoItemModel } from '@app/global/models/crypto-item.model';
import { SymptomCrateRM } from '@app/global/models/symptom-create.model';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class SymptomService  {

  private contoller = 'Symptom';
  public httpOptions: IOptions;

  protected httpClient: HttpClient;
	constructor(
    public http: HttpService,
    ) {
    this.httpClient = new HttpClient(this);
  }


  public getSymptoms(): Observable<any> {
    return this.httpClient.get(`${this.contoller}/GetAll`);
  }

  public create(model: SymptomCrateRM): Observable<any> {
      return this.httpClient.post(`${this.contoller}/AddSymptom`,null, model.getModel());
  }
}
