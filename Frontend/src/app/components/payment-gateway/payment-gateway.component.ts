import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService, Book } from '../../services/cart.service';

@Component({
  selector: 'app-payment-gateway',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  addressDetails = {
    city: '',
    address: '',
    telephone: ''
  };

  paymentDetails = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: ''
  };

  cartItems: Book[] = [];
  totalAmount: number = 0;
  showPaymentForm: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItems = cartItems;
      this.totalAmount = this.calculateTotal();
    });
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }

  onAddressSubmit() {
    this.showPaymentForm = true;
  }

  onPaymentSubmit() {
    console.log('Payment Details:', this.paymentDetails);
  }
}