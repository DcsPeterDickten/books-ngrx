import { props, createAction } from '@ngrx/store';
import { Book } from "src/app/models/book";

export const neuesBuch = createAction(
  "[Book] Neuanlage",
  props<{ book: Book }>() // << () nicht vergessen!
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

export const search = createAction(
  '[Book] Suche',
  props<{ text: string }>()
);
