import { BookService } from './../../services/book.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../types/book.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink],
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
