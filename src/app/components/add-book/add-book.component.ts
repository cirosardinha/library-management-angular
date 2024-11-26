import { BookService } from './../../services/book.service';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { v4 } from 'uuid';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent {
  formAddBook: FormGroup;

  constructor(private bookService: BookService) {
    this.formAddBook = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
      ]),
      genre: new FormControl('', [Validators.required]),
      summary: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (this.formAddBook.valid) {
      const newBook = { id: v4(), ...this.formAddBook.value };
      this.bookService.addBook(newBook);
      this.formAddBook.reset();
    } else {
      console.log('Form inválido');
    }
  }
}
