import { Injectable } from '@angular/core';

export interface GroceryItem {
  id: string;
  product: string;
  quantity: number;
  price: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class GroceryListService {
  private groceryList: GroceryItem[] = [];

  addGrocery(id: string, product: string, quantity: number, price: number): void {
    const total = quantity * price;
    this.groceryList.push({ id, product, quantity, price, total });
  }

  getGroceryList(): GroceryItem[] {
    return this.groceryList;
  }
}
