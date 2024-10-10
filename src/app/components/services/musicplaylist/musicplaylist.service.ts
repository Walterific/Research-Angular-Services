import { Injectable } from '@angular/core';

export interface Music {
  id: string;
  music: string;
  genre: string;
}

@Injectable({
  providedIn: 'root',
})
export class MusicPlaylistService {
  private playlist: Music[] = [];

  addMusic(id: string, music: string, genre: string): void {
    this.playlist.push({ id, music, genre });
  }

  getPlaylist(): Music[] {
    return this.playlist;
  }
}
