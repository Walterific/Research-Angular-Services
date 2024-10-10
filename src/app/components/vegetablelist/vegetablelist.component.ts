import { Component } from '@angular/core';
import { VegetableListService, VegetableList } from '../services/vegetablelist/vegetablelist.service';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetables: VegetableList[] = [];
  id: string = '';
  vegetable: string = '';
  quantity: number = 0;

  constructor(private vegetableListService: VegetableListService) {
    this.vegetables = this.vegetableListService.getVegetables();
  }

  addVegetable(): void {
    this.vegetableListService.addVegetable(this.id, this.vegetable, this.quantity);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.vegetable = '';
    this.quantity = 0;
  }
}
