import { createReducer, on } from '@ngrx/store';
import produce from "immer";
import * as BookActions from './book.actions';
import { initialState } from "./books.state";

export const bookReducer = createReducer(
  initialState,
  on(BookActions.neuesBuchGespeichert, (state, { book }) =>
    produce(state, (draft: any) => {

      draft.entities[book.isbn] = {
        ...book,
        available: true,
      }

    })
  ),
  on(BookActions.search, (state, { text }) => ({
    ...state,
    filter: {
      ...state.filter,
      text,
    },
  }))
);

