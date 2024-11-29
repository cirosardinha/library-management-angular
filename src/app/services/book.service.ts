import { Injectable } from '@angular/core';
import { Book } from '../../types/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];

  constructor() {
    this.loadBooksFromLocalStorage();
  }

  private loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('books');
    this.books = storedBooks ? JSON.parse(storedBooks) : [];
  }

  private saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook(book: Book) {
    this.books.push(book);
    this.saveBooksToLocalStorage();
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
    this.saveBooksToLocalStorage();
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
    this.saveBooksToLocalStorage();
  }
}
