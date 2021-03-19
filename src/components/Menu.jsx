import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuComponent = () => {
  return (
    <Menu as="header">
      <Menu.Item name="book-store">Book Store</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="total">
          Total: $<b>0</b>
        </Menu.Item>
        <Menu.Item name="cart">Cart (0)</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuComponent;
