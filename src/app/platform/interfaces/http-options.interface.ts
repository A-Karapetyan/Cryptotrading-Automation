import { HttpHeaders } from '@angular/common/http';

export interface IHttpOptions {
  headers?: HttpHeaders;
  observe?: 'body' | null;
  params?: any;
  responseType?: 'json';
  withCredentials?: boolean | null;
}
