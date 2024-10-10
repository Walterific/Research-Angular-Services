import { Component } from '@angular/core';
import { LaptopListService, Laptop } from '../services/laptoplist/laptoplist.service';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopList: Laptop[] = [];
  id: string = '';
  laptop: string = '';
  price: number = 0;

  constructor(private laptopListService: LaptopListService) {
    this.laptopList = this.laptopListService.getLaptopList();
  }

  addLaptop(): void {
    this.laptopListService.addLaptop(this.id, this.laptop, this.price);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.laptop = '';
    this.price = 0;
  }
}
