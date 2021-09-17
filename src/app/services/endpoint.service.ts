import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '@endpoints.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  getCodewarsInfo(): Observable<any> {
    return this.http.get(ENDPOINTS.CODEWARS_GET_USER);
  }
}
