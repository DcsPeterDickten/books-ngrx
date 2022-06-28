import { Book } from "../../models/book";

export interface Books {
  // Eindeutiges Merkmal (ISBN) als Key
  [isbn: string]: Book;
}

export interface Filter {
  text: string;
}

export interface BookState {
  entities: Books;
  filter: Filter;
}

export const initialState: BookState = {
  entities: {},
  filter: {
    text: '',
  },
};
