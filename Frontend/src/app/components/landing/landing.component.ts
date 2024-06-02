import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
        console.log(this.books); 
      },
      error => {
        console.error('Error fetching books', error);
      }
    );
  }
}
