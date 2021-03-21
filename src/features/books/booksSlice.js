import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import orderBy from 'lodash/orderBy';
import { filterItems } from '../../app/config';

// Create the thunk to fetch books via API asynchronously
// Used as 'extraReducers' in books reducer
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_arg, { getState, requestId }) => {
    const { currentRequestId, isLoading } = getState().books;

    if (!isLoading || requestId !== currentRequestId) {
      return false;
    }

    try {
      const response = await axios.get('/books.json');

      if (response.statusText === 'OK') {
        return response.data;
      }
    } catch (error) {
      console.log(error.response);
    }
  }
);

// Sort books using lodash orderBy method
const filterBooksBy = (books, filterBy) => {
  switch (filterBy) {
    case filterItems.all:
      return orderBy(books, 'id', 'asc');
    case filterItems.price_desc:
      return orderBy(books, 'price', 'desc');
    case filterItems.price_asc:
      return orderBy(books, 'price', 'asc');
    default:
      return books;
  }
};

const initialState = {
  isLoading: false,
  items: [],
  filterBy: filterItems.all,
  currentRequestId: undefined,
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    filterBooks: (state, action) => {
      const { payload } = action;

      if (payload !== state.filterBy) {
        state.filterBy = payload;
        state.items = filterBooksBy(state.items, state.filterBy);
      }
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      const { requestId } = action.meta;

      if (!state.isLoading) {
        state.isLoading = true;
        state.currentRequestId = requestId;
      }
    },
    [fetchBooks.fulfilled]: (state, action) => {
      const { requestId } = action.meta;

      if (state.isLoading && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.items = action.payload;
        state.currentRequestId = undefined;
      }
    },
    [fetchBooks.rejected]: (state, action) => {
      const { requestId } = action.meta;

      if (state.isLoading && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

// Selectors
export const selectBooks = (state) => state.books;
export const selectFilterBy = (state) => state.books.filterBy;

export const { filterBooks } = booksSlice.actions;

export default booksSlice.reducer;
