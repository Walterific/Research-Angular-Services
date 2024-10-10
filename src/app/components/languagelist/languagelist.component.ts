import { Component } from '@angular/core';
import { LanguageListService, LanguageList } from '../services/languagelist/languagelist.service';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languages: LanguageList[] = [];
  id: string = '';
  language: string = '';

  constructor(private languageListService: LanguageListService) {
    this.languages = this.languageListService.getLanguages();
  }

  addLanguage(): void {
    this.languageListService.addLanguage(this.id, this.language);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.language = '';
  }
}
