import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

const BookCard = ({ book, countInCart, onAddToCart }) => {
  const { title, subtitle, price, image } = book;

  return (
    <Card as="article" raised>
      <Image src={image} wrapped ui={false} alt={title} />
      <Card.Content>
        <Card.Header as="h3">{title}</Card.Header>
        <Card.Meta>
          <span className="subtitle">{subtitle}</span>
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
        Add to Cart {countInCart > 0 && `(${countInCart})`}
        <Icon name="shopping cart" />
      </Button>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  countInCart: PropTypes.number,
  onAddToCart: PropTypes.func.isRequired,
};

export default React.memo(BookCard);
