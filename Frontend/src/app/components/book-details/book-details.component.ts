import { Component } from '@angular/core';

interface Book {
  bookId: string;
  title: string;
  imageUrl: string;
  id_Author: string;
  id_Genre: string;
  description: string;
  price: number;
  stock: number;
  id_Editorial: string;
}

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

}
