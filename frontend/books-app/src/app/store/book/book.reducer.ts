import { createReducer, on } from '@ngrx/store';
import { initialState } from './books.state';
import * as BookActions      from "./book.actions";

// export const bookReducer = createReducer(
//    initialState,
//    on(BookActions.neuesBuch, (state, { book }) =>  return {})
// );

export const bookReducer = createReducer(
  initialState,
  on(BookActions.neuesBuch, (state, { book }) => {
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

