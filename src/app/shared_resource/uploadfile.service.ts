import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const httpHeaders = new HttpHeaders ({
  'Content-Type': 'multipart/form-data',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'
});
@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(private _http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8080/uploadPhoto', formdata, {
      reportProgress: true,
      responseType: 'text',
      headers:httpHeaders
    }
    );
    return this._http.request(req);
  }
}
