import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../../types/book.model';
import { BookCardComponent } from '../book-card/book-card.component';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks();
  }
}
