import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class BookEffects {

  constructor(
    private action$: Actions,
    private http:    HttpClient) { }

  submit$ = createEffect(() =>
    this.action$.pipe(
      // ... TODO!
    )
  );
}
