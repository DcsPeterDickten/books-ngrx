import { props, createAction } from '@ngrx/store';
import { Book } from "src/app/models/book";

export const neuesBuch = createAction(
  "[Book] Neuanlage",
  props<{ book: Book }>() // << () nicht vergessen!
);

const action = neuesBuch({
  book: {
    isbn: '42',
    title: '...',
    author: '...',
    category: 'poems',
    available: true
  }
}
);

export const neuesBuchMitId = createAction(
  "[Book] Neuanlage",
  (book: Book) => {
    return {
      book: {
        ...book,
        id: Math.random().toString(36).substr(2, 10),
      },
    }
  }
);

const book2 = neuesBuchMitId({
  isbn: '42',
  title: '...',
  author: '...',
  category: 'poems',
  available: true
})
