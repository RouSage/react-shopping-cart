import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { addItem, selectEachItemCount } from '../cart/cartSlice';
import BookCard from './BookCard';
import { fetchBooks, selectBooks } from './booksSlice';

const Books = () => {
  const { items: books, isLoading } = useSelector(selectBooks);
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
        <p>Loading</p>
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
