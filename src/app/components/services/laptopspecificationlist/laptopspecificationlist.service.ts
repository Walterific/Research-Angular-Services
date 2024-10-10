import { Injectable } from '@angular/core';

export interface LaptopSpecification {
  id: string;
  laptop: string;
  specs: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class LaptopSpecificationListService {
  private laptopSpecificationList: LaptopSpecification[] = [];

  addLaptopSpecification(id: string, laptop: string, specs: string, price: number): void {
    this.laptopSpecificationList.push({ id, laptop, specs, price });
  }

  getLaptopSpecificationList(): LaptopSpecification[] {
    return this.laptopSpecificationList;
  }
}
