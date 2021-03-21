import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import Cart from '../features/cart/Cart';
import { selectTotal } from '../features/cart/cartSlice';

const Header = () => {
  const total = useSelector(selectTotal);

  return (
    <Menu as="header" fixed="top">
      <Menu.Item name="book-store">Book Store</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="total">
          Total: $<b>{total}</b>
        </Menu.Item>

        <Cart />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
