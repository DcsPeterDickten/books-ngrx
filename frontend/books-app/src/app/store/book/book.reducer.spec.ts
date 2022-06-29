import { bookReducer } from "./book.reducer";
import { INIT } from "@ngrx/store";
import { BookState, initialState } from './books.state';
import * as BookActions from './book.actions';

describe("Book Reducer", () => {
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
      const isbn = "42";
      const state: BookState = {
        ...initialState,
        entities: {
          [isbn]: {
            isbn: isbn,
            author: "PD",
            title: "Test Books",
            category: "tech",
            available: true,
          },
        }
      };
      const nextState = bookReducer(state, BookActions.search({ text: isbn }));
      expect(nextState.entities[isbn].title).toBe("Test Books");
    });
  });

});
