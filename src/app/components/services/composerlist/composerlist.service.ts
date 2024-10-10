import { Injectable } from '@angular/core';

export interface ComposerList {
  id: string;
  composer: string;
  gender: string;
}

@Injectable({
  providedIn: 'root',
})
export class ComposerListService {
  private composers: ComposerList[] = [];

  addComposer(id: string, composer: string, gender: string): void {
    this.composers.push({ 
      id, 
      composer,  
      gender 
    });
  }

  getComposers(): ComposerList[] {
    return this.composers;
  }
}
