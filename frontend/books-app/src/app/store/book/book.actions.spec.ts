import * as BookActions from "./book.actions";

describe("Book Actions", () => {

  it("should create an action to loads the books", () => {
    const action = BookActions.buecherLaden();
    expect(action.type).toBe("[Book] Laden");
  })

})
