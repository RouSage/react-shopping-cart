import PropTypes from 'prop-types';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

const BookCard = ({ book, countInCart, onAddToCart }) => {
  const { title, subtitle, price, image } = book;

  return (
    <Card as="article" raised>
      <LazyLoad height={338} once offset={100}>
        <Image
          src={image}
          wrapped
          ui={false}
          alt={title}
          width="290"
          height="338"
        />
      </LazyLoad>
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
