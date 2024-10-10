import { Injectable } from '@angular/core';

export interface BuildingList {
  id: string;
  buildingname: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class BuildingListService {
  private buildings: BuildingList[] = [];

  addBuilding(id: string, buildingname: string, location: string): void {
    this.buildings.push({ 
      id, 
      buildingname,  
      location 
    });
  }

  getBuildings(): BuildingList[] {
    return this.buildings;
  }
}
