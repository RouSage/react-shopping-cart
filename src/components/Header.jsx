import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Popup } from 'semantic-ui-react';
import Cart from '../features/cart/Cart';
import {
  removeItem,
  selectCartItemsCount,
  selectEachItemCount,
  selectTotal,
  selectUniqueCartItems,
} from '../features/cart/cartSlice';

const Header = () => {
  const total = useSelector(selectTotal);
  const uniqueCartItems = useSelector(selectUniqueCartItems);
  const cartItemsCount = useSelector(selectCartItemsCount);
  const eachItemCount = useSelector(selectEachItemCount);
  const dispatch = useDispatch();

  const onRemoveFromCart = useCallback(
    (id) => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  return (
    <Menu as="header" fixed="top">
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
            {uniqueCartItems.map((item) => (
              <Cart
                key={item.id}
                {...item}
                countInCart={eachItemCount[item.id]}
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
