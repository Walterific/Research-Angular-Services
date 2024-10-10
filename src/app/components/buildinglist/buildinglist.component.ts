import { Component } from '@angular/core';
import { BuildingListService, BuildingList } from '../services/buildinglist/buildinglist.service';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildings: BuildingList[] = [];
  id: string = '';
  buildingname: string = '';
  location: string = '';

  constructor(private buildingListService: BuildingListService) {
    this.buildings = this.buildingListService.getBuildings();
  }

  addBuilding(): void {
    this.buildingListService.addBuilding(this.id, this.buildingname, this.location);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.buildingname = '';
    this.location = '';
  }
}
