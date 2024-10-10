import { Injectable } from '@angular/core';

export interface InventoryItem {
  id: string;
  product: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class InventoryListService {
  private inventoryList: InventoryItem[] = [];

  addInventoryItem(id: string, product: string, quantity: number): void {
    this.inventoryList.push({ id, product, quantity });
  }

  getInventoryList(): InventoryItem[] {
    return this.inventoryList;
  }
}
