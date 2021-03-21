import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon, Image, List } from 'semantic-ui-react';

const CartItem = ({
  id,
  title,
  price,
  image,
  countInCart,
  onRemoveFromCart,
}) => (
  <List.Item>
    <List.Content floated="right">
      <Button color="red" onClick={() => onRemoveFromCart(id)}>
        <Icon name="delete" fitted />
      </Button>
    </List.Content>
    <Image avatar src={image} />
    <List.Content>
      <List.Header>{title}</List.Header>
      <List.Description>
        <b>
          ${price} {countInCart > 1 && `(${countInCart})`}
        </b>
      </List.Description>
    </List.Content>
  </List.Item>
);

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  countInCart: PropTypes.number.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default React.memo(CartItem);
