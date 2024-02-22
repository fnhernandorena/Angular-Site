import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Movie } from '../interfaces/examples';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private httpClient : HttpClient) {}

  searchMovies(searchTerm: string): Observable<Movie[]> {
    return this.httpClient.get(`https://search.imdbot.workers.dev/?q=${searchTerm}`).pipe(
      map((response: any) => {
        const { description } = response;
        return description.map((movie: any) => {
          const { '#TITLE': title, '#YEAR': year, '#IMG_POSTER': poster, '#RANK': rank, '#ACTORS': actors } = movie;
          return { title, year, poster, rank, actors } as Movie;
        });
      })
    );
  }
}

