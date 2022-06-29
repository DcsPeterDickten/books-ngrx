import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import { initialState } from "./books.state";

export const bookReducer = createReducer(
  initialState,
  on(BookActions.neuesBuch, (state) => {
    return {
      ...state,
      loading: true, // neu
    };
  }),
  on(BookActions.search, (state, { text }) => ({
    ...state,
    filter: {
      ...state.filter,
      text,
    },
  })),
  on(BookActions.neuesBuchGespeichert, (state, { book }) => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [book.isbn]: {
          ...book,
          available: true,
        },
      },
      loading: false // neu
    };
  }),
  on(BookActions.neuesBuchFehler, (state) => ({
    ...state,
    loading: false,
  }))
);

