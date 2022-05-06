import { Injectable } from '@angular/core';
import { IOptions } from '@platform/interfaces/options.interface';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@platform/classes/http-client';
import { CryptoItemModel } from '@app/global/models/crypto-item.model';
import { SymptomCrateRM } from '@app/global/models/symptom-create.model';
import { EditCriteriaRM } from '@app/global/models/edit-criteria.model';


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
    return this.httpClient.get(`${this.contoller}/GetUserSymptoms`);
  }

  public create(model: SymptomCrateRM): Observable<any> {
    return this.httpClient.post(`${this.contoller}/AddSymptom`,null, model.getModel());
  }

  public editCriteria(model: EditCriteriaRM): Observable<any> {
    return this.httpClient.post(`${this.contoller}/EditCriteria`,null, model.getModel());
  }

  public editSymptomTitle(title: string, symptomId: number) {
    return this.httpClient.post(`${this.contoller}/EditSymptomTitle`,null, { title: title, symptomId: symptomId });
  }

  public delete(symptomId: number) {
    return this.httpClient.get(`${this.contoller}/DeleteSymptom?id=${symptomId}`);
  }
}
