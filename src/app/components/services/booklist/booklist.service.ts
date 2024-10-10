import { Injectable } from '@angular/core';

export interface BookList {
  id: string;
  bookname: string;
  yearPublished: number;
}

@Injectable({
  providedIn: 'root',
})

export class BookListService {
  private books: BookList[] = [];

  addBook(id: string, bookname: string, yearPublished: number): void {
    this.books.push({ 
      id, 
      bookname,  
      yearPublished
    });
  }

  getBooks(): BookList[] {
    return this.books;
  }
}