import { ActionReducerMap } from '@ngrx/store';
import { bookReducer } from './book/book.reducer';
import { BookState } from './book/books.state';

export interface RootState {
  book: BookState
}

export const reducers: ActionReducerMap<RootState> = {
  book: bookReducer,  // rot => grau
};
