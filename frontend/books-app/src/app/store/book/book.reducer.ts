import produce from "immer"
import { initialState } from './book.state';
import { on, createReducer } from '@ngrx/store';
import * as BookActions  from './book.actions';
import { Books } from "./books.state";

export const bookReducer = createReducer(
  initialState,
  on(BookActions.neuesBuch, (state, { book }) =>
    produce(state, (draft: any) => {

      draft.entities[book.isbn] = {
        ...book,
        available: true,
      }

    })
  )
);

