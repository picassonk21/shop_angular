import { Injectable } from '@angular/core';
import { IProduct, category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  get products(): IProduct[] {
    return [
      {
        name: 'iPhone 12 Pro',
        category: category.phone,
        price: 1200,
        description: 'the last model of iPhone',
        isAvailable: true,
      },
      {
        name: 'hp elitebook',
        category: category.notebook,
        price: 1500,
        description: 'powerfull laptop for work by HP',
        isAvailable: true,
      },
      {
        name: 'LG Oled',
        category: category.tv,
        price: 600,
        description: 'new model of full HD tv',
        isAvailable: false,
      },
    ];
  }
}
