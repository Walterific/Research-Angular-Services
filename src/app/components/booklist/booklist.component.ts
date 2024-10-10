import { Component } from '@angular/core';
import { BookListService, BookList } from '../services/booklist/booklist.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  books: BookList[] = [];
  id: string = '';
  bookname: string = '';
  yearPublished: number = 0;

  constructor(private bookListService: BookListService) {
    this.books = this.bookListService.getBooks();
  }

  addBook(): void {
    this.bookListService.addBook(this.id, this.bookname, this.yearPublished);
    this.clearFrom();
  }

  clearFrom(): void {
    this.id = '';
    this.bookname = '';
    this.yearPublished = 0;
  }
}
