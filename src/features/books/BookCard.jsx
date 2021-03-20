import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

const BookCard = ({ book, onAddToCart }) => {
  const { title, author, price, image } = book;

  return (
    <Card as="article" raised>
      <Image src={image} wrapped ui={false} alt={title} />
      <Card.Content>
        <Card.Header as="h3">{title}</Card.Header>
        <Card.Meta>
          <span className="author">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra as="footer">
        <Icon name="dollar" />
        <b>{price}</b>
      </Card.Content>
      <Button
        primary
        icon
        labelPosition="right"
        onClick={() => onAddToCart(book)}
      >
        Add to Cart
        <Icon name="shopping cart" />
      </Button>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default React.memo(BookCard);
