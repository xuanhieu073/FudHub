import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  restaurants: [
    {name: `McDonald's`, categoryTags: ['burger', 'chicken', 'fast food']},
    {name: 'Starbuck', categoryTags: ['drink', 'fast food']},
    {name: `McDonald's`, categoryTags: ['burger', 'chicken', 'fast food']},
    {name: 'Starbuck', categoryTags: ['drink', 'fast food']},
    {name: `McDonald's`, categoryTags: ['burger', 'chicken', 'fast food']},
    {name: 'Starbuck', categoryTags: ['drink', 'fast food']},
    {name: `McDonald's`, categoryTags: ['burger', 'chicken', 'fast food']},
    {name: 'Starbuck', categoryTags: ['drink', 'fast food']},
  ],
};
const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
});

export const {} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
