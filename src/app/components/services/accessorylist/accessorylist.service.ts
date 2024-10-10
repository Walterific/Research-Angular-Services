import { Injectable } from '@angular/core';

export interface Accessory {
  id: string;
  accessory: string;
  brand: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class AccessoryListService {
  private accessoryList: Accessory[] = [];

  addAccessory(id: string, accessory: string, brand: string, price: number): void {
    this.accessoryList.push({ id, accessory, brand, price });
  }

  getAccessoryList(): Accessory[] {
    return this.accessoryList;
  }
}
