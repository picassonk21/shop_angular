import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartList: IProduct[] = [];

  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(
      (products) => this.cartList = products,
    );
  }
}
