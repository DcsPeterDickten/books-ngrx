import { bookReducer } from "./book.reducer";
import { INIT } from "@ngrx/store";
import { initialState } from './books.state';

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
});
