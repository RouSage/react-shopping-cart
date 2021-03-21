import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, List, Menu, Popup } from 'semantic-ui-react';
import CartItem from './CartItem';
import {
  removeItem,
  selectCartItemsCount,
  selectEachItemCount,
  selectUniqueCartItems,
} from './cartSlice';

const Cart = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  const uniqueCartItems = useSelector(selectUniqueCartItems);
  const eachItemCount = useSelector(selectEachItemCount);

  const dispatch = useDispatch();

  const onRemoveFromCart = useCallback(
    (id) => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  return (
    <Popup
      trigger={
        <Menu.Item name="cart">
          Cart
          <Label color="blue" circular>
            {cartItemsCount}
          </Label>
        </Menu.Item>
      }
      on="click"
      hideOnScroll
      wide="very"
    >
      <Popup.Content>
        <List divided verticalAlign="middle" size="large">
          {uniqueCartItems.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              countInCart={eachItemCount[item.id]}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
        </List>
      </Popup.Content>
    </Popup>
  );
};

export default Cart;
