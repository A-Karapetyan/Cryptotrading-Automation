import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOptions } from '@platform/interfaces/options.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpOptionsService } from './http-options.service';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(
		private http: HttpClient,
		private httpOptionsService: HttpOptionsService,
	) { }

	public get(url: string, options?: IOptions, params?: any): Observable<any> {
		return this.http.get(this.getFullUrl(url, options), this.httpOptionsService.getOptions(this.prepareParams(params), options));
	}

	public post(url: string, options?: IOptions, params?: any): Observable<any> {
		return this.http.post(this.getFullUrl(url, options), params, this.httpOptionsService.getOptions(null, options));
	}

	public put(url: string, options?: IOptions, params?: any): Observable<any> {
		return this.http.put(this.getFullUrl(url, options), params, this.httpOptionsService.getOptions(null, options));
	}

	public delete(url: string, options?: IOptions, params?: any): Observable<any> {
		return this.http.delete(this.getFullUrl(url, options), this.httpOptionsService.getOptions(this.prepareParams(params), options));
	}

	public patch(url: string, options?: IOptions, params?: any): Observable<any> {
		return this.http.patch(this.getFullUrl(url, options), params, this.httpOptionsService.getOptions(null, options));
	}

  private getFullUrl(url: string, options?: IOptions) {
    if (options.withoutBaseUrl)
      return url;
    return environment.baseUrl + url;
  }

	private prepareParams(params?: any): any {
		for (const i in params) {
			if (typeof params[i] === 'boolean' || typeof params[i] === 'number') {
				params[i] = params[i].toString();
			}
		}

		return params as any;
	}
}
