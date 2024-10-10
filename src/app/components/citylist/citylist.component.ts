import { Component } from '@angular/core';
import { CityListService, CityList } from '../services/citylist/citylist.service';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cities: CityList[] = [];
  id: string = '';
  city: string = '';

  constructor(private cityListService: CityListService) {
    this.cities = this.cityListService.getCities();
  }

  addCity(): void {
    this.cityListService.addCity(this.id, this.city );
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.city = '';
  }
}
