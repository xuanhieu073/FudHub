import {createSelector} from '@reduxjs/toolkit';
import {Store} from '../..';
export const selectRestaurants = createSelector(
  (store: Store) => store.restaurants,
  restaurantState => restaurantState.restaurants,
);
