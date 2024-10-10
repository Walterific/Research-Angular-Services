import { Component } from '@angular/core';
import { MovieListService, MovieList } from '../services/movielist/movielist.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movies: MovieList[] = [];
  id: string = '';
  movie: string = '';
  yearReleased: number = 0;

  constructor(private movieListService: MovieListService) {
    this.movies = this.movieListService.getMovies();
  }

  addMovie(): void {
    this.movieListService.addMovie(this.id, this.movie, this.yearReleased);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.movie = '';
    this.yearReleased = 0;
  }
}
