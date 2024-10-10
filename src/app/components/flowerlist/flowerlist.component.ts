import { Component } from '@angular/core';
import { FlowerListService, Flower } from '../services/flowerlist/flowerlist.service';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowerList: Flower[] = [];
  id: string = '';
  flower: string = '';
  price: number = 0;

  constructor(private flowerListService: FlowerListService) {
    this.flowerList = this.flowerListService.getFlowerList();
  }

  addFlower(): void {
    this.flowerListService.addFlower(this.id, this.flower, this.price);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.flower = '';
    this.price = 0;
  }
}
