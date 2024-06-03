import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService, Book } from '../../../services/cart.service';
import { Router } from '@angular/router';
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

  constructor(private cartService: CartService, private router: Router) {}

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
    this.router.navigate(['/pagos']);
  }
}
