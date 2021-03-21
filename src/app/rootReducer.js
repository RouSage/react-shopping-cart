import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
});

export default rootReducer;
