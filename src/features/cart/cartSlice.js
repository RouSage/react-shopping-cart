import { createSelector, createSlice } from '@reduxjs/toolkit';

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
export const selectCartItemsCount = createSelector(
  selectCartItems,
  (items) => items.length
);
export const selectTotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price, 0)
);

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
