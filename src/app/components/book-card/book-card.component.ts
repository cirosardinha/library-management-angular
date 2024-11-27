import { BookService } from './../../services/book.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../types/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input() book!: Book;
  @Output() delete = new EventEmitter<string>();

  constructor(private bookService: BookService) {}

  onDelete(): void {
    this.delete.emit(this.book.id);
  }
}
