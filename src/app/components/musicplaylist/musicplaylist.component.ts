import { Component } from '@angular/core';
import { MusicPlaylistService, Music } from '../services/musicplaylist/musicplaylist.service';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  playlist: Music[] = [];
  id: string = '';
  music: string = '';
  genre: string = '';

  constructor(private musicPlaylistService: MusicPlaylistService) {
    this.playlist = this.musicPlaylistService.getPlaylist();
  }

  addMusic(): void {
    this.musicPlaylistService.addMusic(this.id, this.music, this.genre);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.music = '';
    this.genre = '';
  }
}
