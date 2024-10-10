import { Injectable } from '@angular/core';

export interface Flower {
  id: string;
  flower: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class FlowerListService {
  private flowerList: Flower[] = [];

  addFlower(id: string, flower: string, price: number): void {
    this.flowerList.push({ id, flower, price });
  }

  getFlowerList(): Flower[] {
    return this.flowerList;
  }
}
