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
  })),
  on(BookActions.neuesBuchGespeichert, (state, { book }) => {
    return {
      ...state,                 // 3 - neuer State
      entities: {               // 2 - neue Buchliste (entities)
        ...state.entities,
        [book.isbn]: {          // 1 - neues Buch
          ...book,              // 1
          available: true,      // 1
        },
      },                        // 2
    };                          // 3
  })
);

