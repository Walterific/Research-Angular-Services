import { Component } from '@angular/core';
import { GameListService, GameList } from '../services/gamelist/gamelist.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  games: GameList[] = [];
  id: string = '';
  game: string = '';
  genre: string = '';

  constructor(private gameListService: GameListService) {
    this.games = this.gameListService.getGames();
  }

  addGame(): void {
    this.gameListService.addGame(this.id, this.game, this.genre);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.game = '';
    this.genre = '';
  }
}
