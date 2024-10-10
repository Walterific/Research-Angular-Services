import { Component } from '@angular/core';
import { ArtistListService, ArtistList } from '../services/artistlist/artistlist.service';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artists: ArtistList[] = [];
  id: string = '';
  artist: string = '';
  gender: string = '';

  constructor(private artistListService: ArtistListService) {
    this.artists = this.artistListService.getArtists();
  }

  addArtist(): void {
    this.artistListService.addArtist(this.id, this.artist, this.gender);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.artist = '';
    this.gender = '';
  }
}