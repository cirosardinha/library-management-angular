import { Book } from './../../../types/book.model';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss',
})
export class EditBookComponent implements OnInit {
  formEditBook!: FormGroup;
  bookID!: string;
  book!: Book | undefined;

  genres: string[] = [
    'Ficção',
    'Fantasia',
    'Romance',
    'Suspense',
    'Terror',
    'Aventura',
    'História',
    'Ciência',
    'Biografia',
    'Autoajuda',
    'Tecnologia',
    'Poesia',
    'Infantil',
  ];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookID = this.route.snapshot.params['id'];
    this.book = this.bookService.getBookById(this.bookID);

    this.formEditBook = new FormGroup({
      title: new FormControl(this.book?.title, [
        Validators.required,
        Validators.minLength(3),
      ]),
      author: new FormControl(this.book?.author, [
        Validators.required,
        Validators.minLength(3),
      ]),
      year: new FormControl(this.book?.year, [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
      ]),
      genre: new FormControl(this.book?.genre, [Validators.required]),
      summary: new FormControl(this.book?.summary, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  onSubmit(): void {
    if (this.formEditBook.valid) {
      const updatedBook: Book = { ...this.book, ...this.formEditBook.value };
      this.bookService.updateBook(updatedBook);
      this.formEditBook.reset();
    }
  }
}
