import { Injectable } from '@angular/core';
import { Book } from '../../types/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
