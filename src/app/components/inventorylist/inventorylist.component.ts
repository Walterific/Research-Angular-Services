import { Component } from '@angular/core';
import { InventoryListService, InventoryItem } from '../services/inventorylist/inventorylist.service';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  inventoryList: InventoryItem[] = [];
  id: string = '';
  product: string = '';
  quantity: number = 0;

  constructor(private inventoryListService: InventoryListService) {
    this.inventoryList = this.inventoryListService.getInventoryList();
  }

  addInventoryItem(): void {
    this.inventoryListService.addInventoryItem(this.id, this.product, this.quantity);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.product = '';
    this.quantity = 0;
  }
}
