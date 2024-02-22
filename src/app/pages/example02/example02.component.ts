import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/examples';
import { NgIf, NgFor } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example02',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule, FormsModule],
  templateUrl: './example02.component.html',
  styleUrl: './example02.component.css',
})
export class Example02Component {
  searchTerm: string = '';
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  submitForm(): void {
    this.movieService.searchMovies(this.searchTerm).subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      },
      (error: any) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
