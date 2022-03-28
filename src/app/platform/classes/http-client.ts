import { IOptions } from '@platform/interfaces/options.interface';
import { Observable } from 'rxjs';

import { IHttpServiceContract } from '../interfaces/http-service-contract';
import { HttpService } from '../services/http.service';

export class HttpClient {
  private http: HttpService;

  constructor(
    private service: IHttpServiceContract,
  ) {
    this.http = this.service.http;
  }

  public get(url: string, options: IOptions = {}, params?: any): Observable<any> {
    return this.http.get(`${url}`, this.prepareOptions(options), params);
  }

  public post(url: string, options: IOptions = {}, params?: any): Observable<any> {
    return this.http.post(`${url}`, this.prepareOptions(options), params);
  }

  public put(url: string, options: IOptions = {}, params?: any): Observable<any> {
    return this.http.put(`${url}`, this.prepareOptions(options), params);
  }

  public delete(url: string, options: IOptions = {}, params?: any): Observable<any> {
    return this.http.delete(`${url}`, this.prepareOptions(options), params);
  }
  
  private prepareOptions(options: IOptions): IOptions {
    return Object.assign({}, this.service.httpOptions || {}, options);
  }
}
