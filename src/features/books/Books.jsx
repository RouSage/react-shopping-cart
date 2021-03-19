import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import BookCard from './BookCard';
import { fetchBooks } from './booksSlice';

const Books = () => {
  const { items: books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <Card.Group centered as="section">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        books.map((book) => <BookCard key={book.id} {...book} />)
      )}
    </Card.Group>
  );
};

export default Books;
