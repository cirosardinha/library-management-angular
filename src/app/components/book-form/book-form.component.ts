import { v4 } from 'uuid';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Book } from '../../../types/book.model';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent implements OnInit {
  isEditMode: boolean = false;
  isSubmitting: boolean = false;
  successMessage: string = '';
  formBook: FormGroup;
  bookToEdit: Book | undefined;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
    this.formBook = new FormGroup({
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

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.isEditMode = true;
      this.bookToEdit = this.bookService.getBookById(bookId);
      if (this.bookToEdit) {
        this.formBook.patchValue(this.bookToEdit);
      }
    }
  }

  onSubmit() {
    if (this.formBook.valid) {
      this.isSubmitting = true;
      const bookData = this.formBook.value;
      if (this.bookToEdit) {
        const updatedBook: Book = { ...this.bookToEdit, ...bookData };
        this.bookService.updateBook(updatedBook);
        this.isSubmitting = false;
        this.successMessage = 'Livro atualizado com sucesso!';
      } else {
        const newBook = { id: v4(), ...bookData };
        this.bookService.addBook(newBook);
        this.isSubmitting = false;
        this.successMessage = 'Livro adicionado com sucesso!';
      }
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
      this.formBook.reset();
    } else {
      console.log('Form inválido');
    }
  }
}
