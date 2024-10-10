import { Component } from '@angular/core';
import { ProductListService, ProductList } from '../services/productlist/productlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products: ProductList[] = [];
  id: string = '';
  productName: string = '';
  manufacture: number = 0;
  expiration: number = 0;

  constructor(private productListService: ProductListService) {
    this.products = this.productListService.getProducts();
  }

  addProduct(): void {
    this.productListService.addProduct(this.id, this.productName, this.manufacture, this.expiration);
    this.clearForm();
  }

  clearForm(): void {
    this.id = '';
    this.productName = '';
    this.manufacture = 0;
    this.expiration = 0;
  }
}
