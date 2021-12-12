import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: IProduct[] = [];

  get cart$(): Observable<IProduct[]> {
    return of(this.cartList);
  }

  addToCart(product: IProduct): void {
   this.cartList.push(product);
  }
}
