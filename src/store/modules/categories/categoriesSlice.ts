import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {icons} from '../../../assets';
import {Category, CategoryState} from './categoryModel';

const initialState: CategoryState = {
  categories: [
    {name: 'Burger', isActive: true, image: icons.burger},
    {name: 'Donat', isActive: false, image: icons.donat},
    {name: 'Pizza', isActive: false, image: icons.pizza},
    {name: 'Mexican', isActive: false, image: icons.mexican},
    {name: 'Asian', isActive: false, image: icons.asian},
  ],
  activeCategory: null,
};
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<Category>) => {
      state.activeCategory = action.payload;
      // state.categories = state.categories.map(category =>
      //   category.name === action.payload.name
      //     ? {...category, isActive: true}
      //     : {...category, isActive: false},
      // );
    },
  },
});

const {actions, reducer} = categorySlice;
export const {selectCategory} = actions;
export default reducer;
