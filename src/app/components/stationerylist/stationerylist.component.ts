import { Component } from '@angular/core';
import { StationeryListService, StationeryItem } from '../services/stationerylist/stationerylist.service';


@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent {
  stationeryList: StationeryItem[] = [];
  id: string = '';
  item: string = '';

  constructor(private stationeryListService: StationeryListService) {
    this.stationeryList = this.stationeryListService.getStationeryList();
  }

  addStationeryItem(): void {
    this.stationeryListService.addStationeryItem(this.id, this.item);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.item = '';
  }
}
