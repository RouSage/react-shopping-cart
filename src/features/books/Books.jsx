import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './booksSlice';

const Books = () => {
  const { items: books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <ul>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          books.map((book) => <li key={book.id}>{book.title}</li>)
        )}
      </ul>
    </div>
  );
};

export default Books;
