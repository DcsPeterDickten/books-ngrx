import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map, mergeMap } from "rxjs/operators";
import * as BookActions from "./book.actions";
import { BookService } from "./book.service";

@Injectable()
export class BookEffects {

  constructor(
    private action$: Actions,
    private bookService: BookService) { }

  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.neuesBuch),
      mergeMap((action) => this.bookService.save(action.book)),
      map((book) => BookActions.neuesBuchGespeichert({ book }))
    )
  );
}
