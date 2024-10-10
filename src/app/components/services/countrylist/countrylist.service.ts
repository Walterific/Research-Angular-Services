import { Injectable } from '@angular/core';

export interface CountryList {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryListService {
  private countries: CountryList[] = [];

  addCountry(id: string, name: string): void {
    this.countries.push({ id, name });
  }

  getCountries(): CountryList[] {
    return this.countries;
  }
}
