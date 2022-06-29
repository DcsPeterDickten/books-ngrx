import { BookFactory, mockState } from "./book.factory.spec";
import { selectFeature } from "./book.selectors";
describe("selectFeature", () => {

  let factory: BookFactory;

  beforeEach(() => {
    factory = new BookFactory();
  });

  it("should select feature state", () => {

    const bookState = factory.state({
      entities: factory.entities(factory.entity(), factory.entity()),
    });
    const rootState = mockState({
      book: bookState,
    });
    expect(selectFeature(rootState)).toEqual(bookState);
  });
});
