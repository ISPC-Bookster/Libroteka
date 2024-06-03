import { Component, OnInit } from '@angular/core';
import { BookService } from './catalogo.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  categories: string[] = [
    'todo',
    'Poesia',
    'Ficcion',
    'Aventura',
    'Terror',
    'Novela',
  ];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      console.log(data);
      this.books = data;
      this.filteredBooks = this.books;
    });
  }

  filterBooks(category: string): void {
    if (category === 'todo') {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(
        (book) => book.id_Genre && book.id_Genre.name === category
      );
    }
  }
}
