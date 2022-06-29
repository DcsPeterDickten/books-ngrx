import { createSelector } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { RootState } from 'src/app/store/';
import { Filter } from './books.state';

// anstatt:
// export const selectAll = (state: RootState) => Object.values(state.book.entities);

// erstmal nur den Teil (Feature/slice) aus dem Gesamt-State holen
export const selectFeature = (state: RootState) => state.book;

// dann die Bücherliste (entities) extrahieren
export const selectEntities = createSelector(
  selectFeature, ({ entities }) => entities
);

// dann das Objekt zu einem Array wandeln
export const selectAll = createSelector(
  selectEntities, (entities) => Object.values(entities)
);

function isMatch(book: Book, filterText: string) {

  if (!filterText) {
    return true;
  }

  const searchText = filterText.toLowerCase();
  return (
    book.title.toLowerCase().includes(searchText) ||
    book.author.toLowerCase().includes(searchText)
  );
}

// filtert die Liste der Bücher
function getMatchingBooks(books: Book[], filterText: string) {
  return books.filter((b) => isMatch(b, filterText));
}

// Zugriff auf den Filter-Wert
export const selectFilter = createSelector(
  selectFeature,
  ({ filter }) => filter
);

// Der gewünschte Selektor => endlich :-)
export const selectFiltered = createSelector(
  selectAll,
  selectFilter,
  (books: Book[], { text }: Filter) => {
    return getMatchingBooks(books, text);
  }
);

export interface BookStats {
  total: number;
  available: number
}

export const selectStats = createSelector(
  selectAll,
  (books): BookStats => {
    return {
      total: books.length,
      available: books.filter(b => b.available).length,
    }
  }
);
