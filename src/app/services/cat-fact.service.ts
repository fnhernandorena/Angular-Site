import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {
  API_URL: string = 'https://catfact.ninja/fact'

  constructor(private httpClient: HttpClient) { }

  getFact(): Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(res => res);
  }
}
