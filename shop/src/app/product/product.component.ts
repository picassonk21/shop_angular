import { Component, Input } from '@angular/core';
import { category, IProduct } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() name: string;

  @Input() description: string;

  @Input() price: number;

  @Input() category: category;

  @Input() isAvailable: boolean;

  @Input() isBuyBtnNeeded = false;

  constructor(private cartService: CartService) { }

  onAddToCart(name: string): void {
    if (this.isAvailable) {
      console.log(`You've bought ${name}`);
      const product: IProduct = {
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.category,
        isAvailable: this.isAvailable,
      }
      this.cartService.addToCart(product);
    }
  }
}
