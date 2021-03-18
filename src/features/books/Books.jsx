import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './booksSlice';

const Books = () => {
  const { items: books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // TODO: Change eslint config from airbnb to CRA (https://www.npmjs.com/package/eslint-config-react-app)
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
