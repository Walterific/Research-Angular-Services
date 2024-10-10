import { Component } from '@angular/core';
import { ComposerListService, ComposerList } from '../services/composerlist/composerlist.service';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composers: ComposerList[] = [];
  id: string = '';
  composer: string = '';
  gender: string = '';

  constructor(private composerListService: ComposerListService) {
    this.composers = this.composerListService.getComposers();
  }

  addComposer(): void {
    this.composerListService.addComposer(this.id, this.composer, this.gender);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.composer = '';
    this.gender = '';
  }
}
