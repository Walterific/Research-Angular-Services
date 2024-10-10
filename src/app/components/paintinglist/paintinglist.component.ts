import { Component } from '@angular/core';
import { PaintingListService, PaintingList } from '../services/paintinglist/paintinglist.service';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintings: PaintingList[] = [];
  id: string = '';
  artname: string = '';
  artist: string = '';

  constructor(private paintingListService: PaintingListService) {
    this.paintings = this.paintingListService.getPaintings();
  }

  addPainting(): void {
    this.paintingListService.addPainting(this.id, this.artname, this.artist);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.artname = '';
    this.artist = '';
  }
}
