import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { filter, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { RootState } from "..";
import * as BookActions from "./book.actions";
import { BookService } from "./book.service";
import * as fromBook from "./book.selectors";

@Injectable()
export class BookEffects {

  constructor(
    private action$: Actions,
    private bookService: BookService,
    private store: Store<RootState>) { }

  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.neuesBuch),
      withLatestFrom(this.store.select(fromBook.selectAll)),
      filter(([action, books]) =>
        books.every(
          ({ title }) => title !== action.book.title
        )
      ),
      mergeMap(([action, books]) => this.bookService.save(action.book)),
      map((book) => BookActions.neuesBuchGespeichert({ book }))
    )
  );
}
