import { Injectable } from '@angular/core';
import { IOptions } from '@platform/interfaces/options.interface';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@platform/classes/http-client';
import { CryptoItemModel } from '@app/global/models/crypto-item.model';
import { AuthService } from './auth.service';
import { IsOptional } from '@app/global/validation/decorators';
import { HttpOptionsService } from './http-options.service';


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
    private authService: AuthService,
    private httpOptionsService: HttpOptionsService,
    public http: HttpService,
    ) {
    this.httpClient = new HttpClient(this);

  }

  public getCryptos(): Observable<any> {
    return this.httpClient.get(`${this.contoller}/GetAll`);
  }

  public getById(id: number): Observable<CryptoItemModel> {
     
    return this.httpClient.get(`${this.contoller}/GetById?id=${id}`);
  }
}
