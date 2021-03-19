import PropTypes from 'prop-types';
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const BookCard = ({ title, author, price, image }) => {
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
    </Card>
  );
};

BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default BookCard;
