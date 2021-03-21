import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Popup } from 'semantic-ui-react';
import Cart from '../features/cart/Cart';
import {
  removeItem,
  selectCartItems,
  selectCartItemsCount,
  selectTotal,
} from '../features/cart/cartSlice';

const Header = () => {
  const total = useSelector(selectTotal);
  const cartItems = useSelector(selectCartItems);
  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const onRemoveFromCart = useCallback(
    (id) => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  return (
    <Menu as="header">
      <Menu.Item name="book-store">Book Store</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="total">
          Total: $<b>{total}</b>
        </Menu.Item>

        <Popup
          trigger={<Menu.Item name="cart">Cart ({cartItemsCount})</Menu.Item>}
          on="click"
          hideOnScroll
          wide="very"
        >
          <Popup.Content>
            {cartItems.map((item) => (
              <Cart
                key={item.id}
                {...item}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </Popup.Content>
        </Popup>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
