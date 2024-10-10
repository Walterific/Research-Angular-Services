import { Component } from '@angular/core';
import { FurnitureListService, Furniture } from '../services/furniturelist/furniturelist.service';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {
  furnitureList: Furniture[] = [];
  id: string = '';
  furniturename: string = '';
  woodtype: string = '';
  price: number = 0;

  constructor(private furnitureListService: FurnitureListService) {
    this.furnitureList = this.furnitureListService.getFurnitureList();
  }

  addFurniture(): void {
    this.furnitureListService.addFurniture(this.id, this.furniturename, this.woodtype, this.price);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.furniturename = '';
    this.woodtype = '';
    this.price = 0;
  } 
}
