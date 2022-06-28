import { createSelector } from '@ngrx/store';
import { RootState } from 'src/app/store/';

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
