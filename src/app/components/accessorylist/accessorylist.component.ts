import { Component } from '@angular/core';
import { AccessoryListService, Accessory } from '../services/accessorylist/accessorylist.service';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessoryList: Accessory[] = [];
  id: string = '';
  accessory: string = '';
  brand: string = '';
  price: number = 0;

  constructor(private accessoryListService: AccessoryListService) {
    this.accessoryList = this.accessoryListService.getAccessoryList();
  }

  addAccessory(): void {
    this.accessoryListService.addAccessory(this.id, this.accessory, this.brand, this.price);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.accessory = '';
    this.brand = '';
    this.price = 0;
  }
}
