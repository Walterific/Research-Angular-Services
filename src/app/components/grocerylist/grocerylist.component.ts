import { Component } from '@angular/core';
import { GroceryListService, GroceryItem } from '../services/grocerylist/grocerylist.service';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceryList: GroceryItem[] = [];
  id: string = '';
  product: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor(private groceryListService: GroceryListService) {
    this.groceryList = this.groceryListService.getGroceryList();
  }

  addGrocery(): void {
    this.groceryListService.addGrocery(this.id, this.product, this.quantity, this.price);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.product = '';
    this.quantity = 0;
    this.price = 0;
  }
}
