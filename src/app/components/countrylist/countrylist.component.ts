import { Component } from '@angular/core';
import { CountryListService, CountryList } from '../services/countrylist/countrylist.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css'],
})
export class CountryListComponent {
  countries: CountryList[] = [];
  id: string = '';
  name: string = '';

  constructor(private countryListService: CountryListService) {
    this.countries = this.countryListService.getCountries();
  }

  addCountry(): void {
    this.countryListService.addCountry(this.id, this.name);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.name = '';
  }
}
