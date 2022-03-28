import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IOptions {
  headers?: HttpHeaders;
  observe?: string;
  params?: HttpParams | any;
  responseType?: 'json' | 'blob';
  withCredentials?: boolean;
  dontHandleError?: boolean;
  model?: any;
  pagingExtraModel?: any;
  withoutBaseUrl?: boolean;
  pagination?: boolean;
}
