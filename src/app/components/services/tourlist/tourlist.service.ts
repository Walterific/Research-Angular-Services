import { Injectable } from '@angular/core';

export interface TourList {
  id: string;
  tour: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class TourListService {
  private tours: TourList[] = [];

  addTour(id: string, tour: string, location: string): void {
    this.tours.push({ 
      id, 
      tour,  
      location 
    });
  }

  getTours(): TourList[] {
    return this.tours;
  }
}
