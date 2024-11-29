import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { BookFormComponent } from './components/book-form/book-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'add',
    component: BookFormComponent,
  },
  {
    path: 'edit/:id',
    component: BookFormComponent,
  },
];
