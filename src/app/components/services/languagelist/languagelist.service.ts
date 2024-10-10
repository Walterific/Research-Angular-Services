import { Injectable } from '@angular/core';

export interface LanguageList {
  id: string;
  language: string;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageListService {
  private languages: LanguageList[] = [];

  addLanguage(id: string, language: string): void {
    this.languages.push({ id, language });
  }

  getLanguages(): LanguageList[] {
    return this.languages;
  }
}
