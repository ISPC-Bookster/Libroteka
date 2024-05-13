import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  recentPurchases = [
    {
      orderId: 1234,
      books: [
        { title: 'El Señor de los Anillos', price: 25000 },
        { title: 'Cien Años de Soledad', price: 20000 }
      ],
      total: 45
    },
    {
      orderId: 5678,
      books: [
        { title: 'Sapiens', price: 30 },
        { title: 'The Alchemist', price: 15 }
      ],
      total: 45
    }
  ];

  shipmentStatus = [
    {
      orderId: 1234,
      status: 'In Transit',
      estimatedDelivery: 'May 16, 2024',
      trackingLink: 'https://www.waredock.com/magazine/complete-guide-to-tracking/',
      carrier: 'Courier Service'
    },
    {
      orderId: 5678,
      status: 'Delivered',
      deliveryDate: 'May 10, 2024',
      trackingLink: 'https://www.waredock.com/magazine/complete-guide-to-tracking/',
      carrier: 'National Post'
    }
  ];

}
