import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import orderBy from 'lodash/orderBy';
import { API_BASE_URL, filterItems } from '../../app/config';

// Create the thunk to fetch books via API asynchronously
// Used as 'extraReducers' in books reducer
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_arg, { getState, rejectWithValue, requestId }) => {
    const { currentRequestId, isLoading } = getState().books;

    if (!isLoading || requestId !== currentRequestId) {
      return false;
    }

    try {
      const response = await axios.get(API_BASE_URL + process.env.API_BIN_ID, {
        method: 'GET',
        headers: {
          'X-Master-Key': process.env.API_KEY,
        },
      });

      console.log(response);

      if (response.status === 200) {
        return response.data.record;
      }

      // Check if there's some error message
      // and set error property to some error message
      if (response.data.message) {
        return rejectWithValue(response.data);
      }
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Sort books using lodash orderBy method
const filterBooksBy = (books, filterBy) => {
  switch (filterBy) {
    case filterItems.all:
      return orderBy(books, 'id', 'asc');
    case filterItems.title:
      return orderBy(books, 'title', 'asc');
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
        state.currentRequestId = undefined;
        state.error = action.payload ? action.payload : action.error.message;
      }
    },
  },
});

// Selectors
export const selectBooks = (state) => state.books;
export const selectFilterBy = (state) => state.books.filterBy;

export const { filterBooks } = booksSlice.actions;

export default booksSlice.reducer;
