import { Component, OnInit } from '@angular/core';
import { Books } from '../state/books.state';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  allBooks: Books = { "42": { isbn: '42', title: 'NgRx reloaded', author: 'PD', category: 'tech', available: true } };

  ngOnInit(): void {
    const bestseller = this.allBooks['42'];
    console.log({ bestseller });

    const ids = Object.keys(this.allBooks);
    console.log({ ids });

    const bookArray = Object.values(this.allBooks);
    console.log({ bookArray });
  }
}
