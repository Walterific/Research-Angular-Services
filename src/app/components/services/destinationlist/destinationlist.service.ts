import { Injectable } from '@angular/core';

export interface Destination {
  id: string;
  destination: string;
  location: string;
  entrancePrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class DestinationListService {
  private destinationList: Destination[] = [];

  addDestination(id: string, destination: string, location: string, entrancePrice: number): void {
    this.destinationList.push({ id, destination, location, entrancePrice });
  }

  getDestinationList(): Destination[] {
    return this.destinationList;
  }
}
