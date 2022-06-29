import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import { RootState } from "..";
import * as BookActions from "./book.actions";
import { BookService } from "./book.service";

@Injectable()
export class BookEffects {

  constructor(
    private action$: Actions,
    private bookService: BookService,
    private store: Store<RootState>) { }

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

}
