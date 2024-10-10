import { Component } from '@angular/core';
import { DestinationListService, Destination } from '../services/destinationlist/destinationlist.service';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinationList: Destination[] = [];
  id: string = '';
  destination: string = '';
  location: string = '';
  entrancePrice: number = 0;

  constructor(private destinationListService: DestinationListService) {
    this.destinationList = this.destinationListService.getDestinationList();
  }

  addDestination(): void {
    this.destinationListService.addDestination(this.id, this.destination, this.location, this.entrancePrice);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.destination = '';
    this.location = '';
    this.entrancePrice = 0;
  }
}
