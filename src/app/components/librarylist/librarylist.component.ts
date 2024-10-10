import { Component } from '@angular/core';
import { LibraryListService, LibraryList } from '../services/librarylist/librarylist.service';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  libraries: LibraryList[] = [];
  id: string = '';
  libraryName: string = '';
  opening: string = '';
  closing: string = '';

  constructor(private libraryListService: LibraryListService) {
    this.libraries = this.libraryListService.getLibraries();
  }

  addLibrary(): void {
    this.libraryListService.addLibrary(this.id, this.libraryName, this.opening, this.closing);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.libraryName = '';
    this.opening = '';
    this.closing = '';
  }
}
