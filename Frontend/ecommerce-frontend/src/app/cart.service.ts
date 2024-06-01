import { Injectable } from '@angular/core';

interface CartItem {
  productId: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  constructor() { }

  addToCart(productId: number) {
    const item = this.items.find(item => item.productId === productId);
    if (item) {
      item.quantity += 1;
    } else {
      this.items.push({ productId, quantity: 1 });
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }
}