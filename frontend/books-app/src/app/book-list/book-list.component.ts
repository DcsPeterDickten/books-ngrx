import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { RootState } from 'src/app/store/';
import * as BookActions from 'src/app/store/book/book.actions';
import * as fromBook from 'src/app/store/book/book.selectors';
import { BookStats } from 'src/app/store/book/book.selectors';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  stats$: Observable<BookStats>;
  loading$: Observable<boolean>;

  constructor(private store: Store<RootState>) {
    this.books$ = this.store.select(fromBook.selectFiltered);
    this.stats$ = this.store.select(fromBook.selectStats);
    this.loading$ = this.store.select(fromBook.selectLoading);
  }

  ngOnInit(): void {
  }

  search(text: string): void {
    this.store.dispatch(BookActions.search({ text }));
  }
}
