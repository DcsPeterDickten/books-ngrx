import { INIT } from "@ngrx/store";
import * as BookActions from './book.actions';
import { BookFactory } from "./book.factory.spec";
import { bookReducer } from "./book.reducer";
import { BookState, initialState } from './books.state';

describe("Book Reducer", () => {

  let factory: BookFactory;

  beforeEach(() => {
    factory = new BookFactory();
  });

  describe("init action", () => {
    it("should return the initial state", () => {
      const nextState = bookReducer(undefined, { type: INIT });
      expect(nextState).toBe(initialState);
    });
  });

  describe("unknown action", () => {
    it("should return the previous state on an unknown action", () => {
      const nextState = bookReducer(initialState, {} as any);
      expect(nextState).toBe(initialState);
    });
  });

  describe("resolve", () => {
    it("should load a book", () => {

      const title = "Testing ngrx";
      const book = factory.entity({ title });
      const state = factory.state({
        loaded: true,
        entities: factory.entities(book),
      });

      const nextState = bookReducer(state,
        BookActions.search({ text: title }));
      expect(nextState.entities[book.isbn].title).toBe(title);
    });
  });

});
