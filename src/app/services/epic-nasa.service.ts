import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaImageService {
  private apiUrl = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA';

  constructor(private http: HttpClient) { }

  getDayImages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
