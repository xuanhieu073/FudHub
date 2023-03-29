import {Store} from './../../index';
import {createSelector} from '@reduxjs/toolkit';

export const selectCategories = createSelector(
  (store: Store) => store.categories,
  categories => categories.categories,
);

export const selectActiveCategory = createSelector(
  (store: Store) => store.categories,
  categoryState => categoryState.activeCategory,
);
