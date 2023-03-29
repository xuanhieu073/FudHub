import {RestaurantsState} from './modules/restaurants/restaurantsModels';
import {configureStore} from '@reduxjs/toolkit';
import {CategoryState} from './modules/categories/categoryModel';
import categoryReducer from './modules/categories/categoriesSlice';
import restaurantsReducer from './modules/restaurants/restaurantsSlice';

export type Store = {
  categories: CategoryState;
  restaurants: RestaurantsState;
};
export const store = configureStore<Store>({
  reducer: {
    categories: categoryReducer,
    restaurants: restaurantsReducer,
  },
});
