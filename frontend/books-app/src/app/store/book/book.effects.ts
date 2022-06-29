import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map, mergeMap } from "rxjs/operators";
import { Book } from "../../models/book";
import * as BookActions from "./book.actions";

@Injectable()
export class BookEffects {

  constructor(
    private action$: Actions,
    private http: HttpClient) { }

  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.neuesBuch),
      mergeMap((action) => this.http.post<Book>(`http://localhost:3000/books`, action.book)),
      map((book) => BookActions.neuesBuchGespeichert({ book }))
    )
  );
}
