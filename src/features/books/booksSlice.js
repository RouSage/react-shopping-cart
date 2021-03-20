import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_arg, { getState, requestId }) => {
    const { currentRequestId, isLoading } = getState().books;

    if (!isLoading || requestId !== currentRequestId) {
      return false;
    }

    const response = await axios.get('/books.json');
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  items: [],
  currentRequestId: undefined,
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      if (!state.isLoading) {
        state.isLoading = true;
        state.currentRequestId = action.meta.requestId;
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

export default booksSlice.reducer;
