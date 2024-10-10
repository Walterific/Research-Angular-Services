import { Injectable } from '@angular/core';

export interface StationeryItem {
  id: string;
  item: string;
}

@Injectable({
  providedIn: 'root',
})
export class StationeryListService {
  private stationeryList: StationeryItem[] = [];

  addStationeryItem(id: string, item: string): void {
    this.stationeryList.push({ id, item });
  }

  getStationeryList(): StationeryItem[] {
    return this.stationeryList;
  }
}
