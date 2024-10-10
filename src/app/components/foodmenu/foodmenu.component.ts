import { Component } from '@angular/core';
import { FoodMenuService, FoodItem } from '../services/foodmenu/foodmenu.service';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrl: './foodmenu.component.css'
})
export class FoodmenuComponent {
  menu: FoodItem[] = [];
  id: string = '';
  food: string = '';
  price: number = 0;

  constructor(private foodMenuService: FoodMenuService) {
    this.menu = this.foodMenuService.getMenu();
  }

  addFood(): void {
    this.foodMenuService.addFood(this.id, this.food, this.price);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.food = '';
    this.price = 0;
  }
}
