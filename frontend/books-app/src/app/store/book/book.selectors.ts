import { RootState } from 'src/app/store/';

export const selectAll = (state: RootState) => Object.values(state.book.entities);
