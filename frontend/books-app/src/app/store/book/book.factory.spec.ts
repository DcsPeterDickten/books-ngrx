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
