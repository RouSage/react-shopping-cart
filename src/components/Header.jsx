import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { selectCartItemsCount, selectTotal } from '../features/cart/cartSlice';

const Header = () => {
  const total = useSelector(selectTotal);
  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <Menu as="header">
      <Menu.Item name="book-store">Book Store</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="total">
          Total: $<b>{total}</b>
        </Menu.Item>
        <Menu.Item name="cart">Cart ({cartItemsCount})</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
