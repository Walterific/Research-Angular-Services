import { Injectable } from '@angular/core';

export interface Furniture {
  id: string;
  furniturename: string;
  woodtype: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class FurnitureListService {
  private furnitureList: Furniture[] = [];

  addFurniture(id: string, furniturename: string, woodtype: string, price: number): void {
    this.furnitureList.push({ id, furniturename, woodtype, price });
  }

  getFurnitureList(): Furniture[] {
    return this.furnitureList;
  }
}
