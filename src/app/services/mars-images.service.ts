import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarsPhotoService {
  private apiKey = 'LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA';
  private apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

  constructor(private http: HttpClient) { }

  searchPhotos(sol: string): Observable<any> {
    const url = `${this.apiUrl}?sol=${sol}&page=1&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}