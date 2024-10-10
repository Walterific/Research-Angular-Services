import { Injectable } from '@angular/core';

export interface MovieList {
  id: string;
  movie: string;
  yearReleased: number;
}

@Injectable({
  providedIn: 'root',
})

export class MovieListService {
  private movies: MovieList[] = [];

  addMovie(id: string, movie: string, yearReleased: number): void {
    this.movies.push({ 
      id, 
      movie,  
      yearReleased 
    });
  }

  getMovies(): MovieList[] {
    return this.movies;
  }
}
