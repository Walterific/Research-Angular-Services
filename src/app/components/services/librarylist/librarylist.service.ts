import { Injectable } from '@angular/core';

export interface LibraryList {
  id: string;
  libraryName: string;
  opening: string;
  closing: string;
}

@Injectable({
  providedIn: 'root',
})
export class LibraryListService {
  private libraries: LibraryList[] = [];

  addLibrary(id: string, libraryName: string, opening: string, closing: string): void {
    this.libraries.push({ 
      id, 
      libraryName,  
      opening, 
      closing 
    });
  }

  getLibraries(): LibraryList[] {
    return this.libraries;
  }
}
