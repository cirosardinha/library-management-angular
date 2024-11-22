import { BookService } from './../../services/book.service';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
  addBookForm: FormGroup;

  constructor(private bookService: BookService) {
    this.addBookForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      year: new FormControl(''),
      genre: new FormControl(''),
      summary: new FormControl(''),
    });
  }
  onSubmit() {
    if (this.addBookForm.valid) {
      const newBook = { id: v4(), ...this.addBookForm.value };
      this.bookService.addBook(newBook);
    } else {
      console.log('Form inválido');
    }
  }
}
