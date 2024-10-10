import { Injectable } from '@angular/core';

export interface ProductList {
  id: string;
  productName: string;
  manufacture: number;
  expiration: number;
}

@Injectable({
  providedIn: 'root',
})

export class ProductListService {
  private products: ProductList[] = [];

  addProduct(id: string, productName: string, manufacture: number, expiration: number): void {
    this.products.push({ 
      id, 
      productName,  
      manufacture,
      expiration
    });
  }

  getProducts(): ProductList[] {
    return this.products;
  }
}