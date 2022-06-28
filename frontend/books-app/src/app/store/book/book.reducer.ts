import { createReducer } from '@ngrx/store';
import { initialState } from './books.state';

export const bookReducer = createReducer(initialState);
