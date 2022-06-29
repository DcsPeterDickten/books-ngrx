import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { RootState } from 'src/app/store/';
import * as fromBook from 'src/app/store/book/book.selectors';
import * as BookActions from 'src/app/store/book/book.actions';
import { BookStats } from 'src/app/store/book/book.selectors';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$: Observable<Book[]>;
  stats$: Observable<BookStats>;

  constructor(private store: Store<RootState>) {
    this.books$ = this.store.select(fromBook.selectFiltered);
    this.stats$ = this.store.select(fromBook.selectStats);
  }

  search(text: string): void {
    this.store.dispatch(BookActions.search({ text }));
  }
}
