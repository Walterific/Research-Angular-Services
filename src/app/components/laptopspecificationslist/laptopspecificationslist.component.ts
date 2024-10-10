import { Component } from '@angular/core';
import { LaptopSpecificationListService, LaptopSpecification } from '../services/laptopspecificationlist/laptopspecificationlist.service';

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrl: './laptopspecificationslist.component.css'
})
export class LaptopspecificationslistComponent {
  laptopSpecificationList: LaptopSpecification[] = [];
  id: string = '';
  laptop: string = '';
  specs: string = '';
  price: number = 0;

  constructor(private laptopSpecificationListService: LaptopSpecificationListService) {
    this.laptopSpecificationList = this.laptopSpecificationListService.getLaptopSpecificationList();
  }

  addLaptopSpecification(): void {
    this.laptopSpecificationListService.addLaptopSpecification(this.id, this.laptop, this.specs, this.price);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.laptop = '';
    this.specs = '';
    this.price = 0;
  }
}
