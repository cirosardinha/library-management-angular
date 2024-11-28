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

  getBookById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  updateBook(book: Book) {
    const index = this.books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
