import { Injectable } from '@angular/core';

export interface CarmodelList {
  id: string;
  carName: string;
  yearReleased: number;
}

@Injectable({
  providedIn: 'root',
})

export class CarmodelListService {
  private cars: CarmodelList[] = [];

  addCar(id: string, carName: string, yearReleased: number): void {
    this.cars.push({ 
      id, 
      carName,  
        yearReleased 
    });
  }

  getCars(): CarmodelList[] {
    return this.cars;
  }
}