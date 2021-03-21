import { createSelector, createSlice } from '@reduxjs/toolkit';
import uniqBy from 'lodash/uniqBy';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectUniqueCartItems = createSelector(selectCartItems, (items) =>
  uniqBy(items, (item) => item.id)
);
export const selectCartItemsCount = createSelector(
  selectCartItems,
  (items) => items.length
);
export const selectTotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price, 0)
);
// Create an object that has the id of each item (in cart) as a key
// and how many items there are with this id as a value
export const selectEachItemCount = createSelector(selectCartItems, (items) => {
  let obj = {};
  items.map((item) => {
    obj = obj[item.id]
      ? { ...obj, [item.id]: (obj[item.id] += 1) }
      : { ...obj, [item.id]: 1 };
  });

  return obj;
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
