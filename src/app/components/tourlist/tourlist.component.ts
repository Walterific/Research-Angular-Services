import { Component } from '@angular/core';
import { TourListService, TourList } from '../services/tourlist/tourlist.service';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tours: TourList[] = [];
  id: string = '';
  tour: string = '';
  location: string = '';

  constructor(private tourListService: TourListService) {
    this.tours = this.tourListService.getTours();
  }

  addTour(): void {
    this.tourListService.addTour(this.id, this.tour, this.location);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.tour = '';
    this.location = '';
  }
}
