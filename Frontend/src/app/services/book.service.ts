
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './cart.service'; // Import the Book interface from the cart service

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://your-api-url/books'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
