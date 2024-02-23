import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaMediaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA';

  constructor(private http: HttpClient) { }

  getMedia(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener el medio desde la API de la NASA:', error);
        throw error;
      })
    );
  }
}

