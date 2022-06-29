import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { catchError, filter, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { RootState } from "..";
import * as BookActions from "./book.actions";
import { BookService } from "./book.service";
import * as fromBook from "./book.selectors";
import { EMPTY } from "rxjs";

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

}
