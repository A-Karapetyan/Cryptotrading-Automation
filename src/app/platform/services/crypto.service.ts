import { Injectable } from '@angular/core';
import { IOptions } from '@platform/interfaces/options.interface';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@platform/classes/http-client';
import { CryptoItemModel } from '@app/global/models/crypto-item.model';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class CryptoService  {

  private contoller = 'Cryptocurrency';
  public httpOptions: IOptions;

  protected httpClient: HttpClient;
	constructor(
    public http: HttpService,
    ) {
    this.httpClient = new HttpClient(this);

  }


  public getCryptos(): Observable<any> {
    return this.httpClient.get(`${this.contoller}/GetAll`);
  }

  public getById(id: number): Observable<CryptoItemModel> {
      return this.httpClient.get(`${this.contoller}/GetById?id=${id}`)
  }
}
