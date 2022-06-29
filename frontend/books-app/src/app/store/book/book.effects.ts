import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";

import { RootState } from "..";
import * as BookActions from "./book.actions";
import { BookService } from "./book.service";

@Injectable()
export class BookEffects implements OnInitEffects {

  constructor(
    private action$: Actions,
    private bookService: BookService,
    private store: Store<RootState>) { }

  ngrxOnInitEffects(): Action {
    return BookActions.buecherLaden();
  }

  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.neuesBuch),
      mergeMap(
        (action) => this.bookService.save(action.book)
          .pipe(catchError(() => EMPTY))
      ),
      map((book) => BookActions.neuesBuchGespeichert({ book }))
    )
  );

  load$ = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.buecherLaden),
      switchMap(() => this.bookService.getAll()), // WTF?
      map((books) => BookActions.buecherLadenErfolgreich({ books }))
    ));

  logging$ = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.neuesBuchGespeichert),
      tap(({ book }) => {
        console.log(`${book.title} wurde gespeichert`);
      })
    ),
    { dispatch: false }
    // << verhindert, dass neuesBuchGespeichert wieder an den Store geht.
  );

}
