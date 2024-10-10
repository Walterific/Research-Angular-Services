import { Injectable } from '@angular/core';

export interface PaintingList {
  id: string;
  artname: string;
  artist: string;
}

@Injectable({
  providedIn: 'root',
})
export class PaintingListService {
  private paintings: PaintingList[] = [];

  addPainting(id: string, artname: string, artist: string): void {
    this.paintings.push({ 
      id, 
      artname,  
      artist 
    });
  }

  getPaintings(): PaintingList[] {
    return this.paintings;
  }
}
