import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon, Image, List } from 'semantic-ui-react';

const Cart = ({ id, title, price, image, countInCart, onRemoveFromCart }) => (
  <List divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button color="red" icon onClick={() => onRemoveFromCart(id)}>
          <Icon name="remove" />
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
  </List>
);

Cart.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  countInCart: PropTypes.number.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default React.memo(Cart);
