import { INIT } from "@ngrx/store";
import { reducers, RootState } from "..";
import { Book } from "../../models/book";
import { Books, BookState, initialState } from "./books.state";

export class BookFactory {
  private lastIsbn = 0;

  entity(book?: Partial<Book>): Book {
    const newIsbn = this.lastIsbn++;
    return {
      isbn: `${newIsbn}`,
      title: `Buch ${newIsbn}`,
      author: 'PD',
      category: 'tech',
      available: false,
      ...book,
    };
  }

  entities(...books: Book[]): Books {
    const entities: Books = {};
    books.forEach((book) => (entities[book.isbn] = book));
    return entities;
  }

  state(state: Partial<BookState>): BookState {
    return {
      ...initialState,
      ...state,
    };
  }
}

interface Mapping {
   [key: string]: any
 }

// index.spec.ts
export const mockState = (override: Partial<RootState> = {}): RootState => {
  const initialState: Mapping = {};
  Object.entries(reducers).forEach(([key, reducer]) => {
    initialState[key] = reducer(undefined, { type: INIT });
  });
  return {
    ...initialState,
    ...override,
  } as RootState;
};
