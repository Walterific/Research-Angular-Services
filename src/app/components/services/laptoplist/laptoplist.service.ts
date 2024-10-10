import { Injectable } from '@angular/core';

export interface Laptop {
  id: string;
  laptop: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class LaptopListService {
  private laptopList: Laptop[] = [];

  addLaptop(id: string, laptop: string, price: number): void {
    this.laptopList.push({ id, laptop, price });
  }

  getLaptopList(): Laptop[] {
    return this.laptopList;
  }
}
