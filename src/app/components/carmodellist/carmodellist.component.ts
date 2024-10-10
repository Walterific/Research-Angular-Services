import { Component } from '@angular/core';
import { CarmodelListService, CarmodelList } from '../services/carmodellist/carmodellist.service';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  cars: CarmodelList[] = [];
  id: string = '';
  carName: string = '';
  yearReleased: number = 0;

  constructor(private carmodelListService: CarmodelListService) {
    this.cars = this.carmodelListService.getCars();
  }

  addCar(): void {
    this.carmodelListService.addCar(this.id, this.carName, this.yearReleased);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.carName = '';
    this.yearReleased = 0;
  }
}
