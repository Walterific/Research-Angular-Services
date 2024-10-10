import { Injectable } from '@angular/core';

export interface GameList {
  id: string;
  game: string;
  genre: string;
}

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private games: GameList[] = [];

  addGame(id: string, game: string, genre: string): void {
    this.games.push({ id, game, genre });
  }

  getGames(): GameList[] {
    return this.games;
  }
}
