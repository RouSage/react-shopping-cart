import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Loader } from 'semantic-ui-react';
import ErrorMessage from '../../components/ErrorMessage';
import { addItem, selectEachItemCount } from '../cart/cartSlice';
import BookCard from './BookCard';
import { fetchBooks, selectBooks } from './booksSlice';

const Books = () => {
  const { items: books, isLoading, error } = useSelector(selectBooks);
  const eachBookCount = useSelector(selectEachItemCount);
  const dispatch = useDispatch();

  const onAddToCart = useCallback(
    (book) => {
      dispatch(addItem(book));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Card.Group centered as="section">
      {isLoading ? (
        <Loader active={isLoading} inline="centered" size="big">
          Loading books...
        </Loader>
      ) : error ? (
        <ErrorMessage />
      ) : (
        books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            countInCart={eachBookCount[book.id]}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </Card.Group>
  );
};

export default Books;
