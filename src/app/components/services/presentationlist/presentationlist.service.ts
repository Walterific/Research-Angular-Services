import { Injectable } from '@angular/core';

export interface PresentationList {
  id: string;
  title: string;
  softwareTool: string;
}

@Injectable({
  providedIn: 'root',
})
export class PresentationListService {
  private presentations: PresentationList[] = [];

  addPresentation(id: string, title: string, softwareTool: string): void {
    this.presentations.push({ 
      id, 
      title,  
      softwareTool 
    });
  }

  getPresentations(): PresentationList[] {
    return this.presentations;
  }
}
