import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService, Book } from '../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;
  cartItems: Book[] = [];
  isCartVisible: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
      this.cartItems = cartItems;
    });
  }

  toggleCart(): void {
    this.isCartVisible = !this.isCartVisible;
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  proceedToCheckout(): void {
    console.log('Proceeding to checkout...');
  }
}
