import produce from "immer"
import { on, createReducer } from '@ngrx/store';
import * as BookActions  from './book.actions';
import { initialState } from "./books.state";

export const bookReducer = createReducer(
  initialState,
  on(BookActions.neuesBuch, (state, { book }) =>
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

