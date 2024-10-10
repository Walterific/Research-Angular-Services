import { Injectable } from '@angular/core';

export interface ArtistList {
  id: string;
  artist: string;
  gender: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArtistListService {
  private artists: ArtistList[] = [];

  addArtist(id: string, artist: string, gender: string): void {
    this.artists.push({ 
      id, 
      artist,  
      gender 
    });
  }

  getArtists(): ArtistList[] {
    return this.artists;
  }
}
