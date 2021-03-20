import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { filterItems } from '../app/config';
import { filterBooks, selectFilterBy } from '../features/books/booksSlice';

const Filter = () => {
  const filterBy = useSelector(selectFilterBy);
  const dispatch = useDispatch();

  const handleItemClick = (e, { name }) => {
    dispatch(filterBooks(name));
  };

  return (
    <Menu secondary stackable compact>
      <Menu.Item
        name={filterItems.all}
        active={filterBy === filterItems.all}
        onClick={handleItemClick}
      />
      <Menu.Item
        name={filterItems.author}
        active={filterBy === filterItems.author}
        onClick={handleItemClick}
      />
      <Menu.Item
        name={filterItems.price_desc}
        active={filterBy === filterItems.price_desc}
        onClick={handleItemClick}
        content="Price: high to low"
      />
      <Menu.Item
        name={filterItems.price_asc}
        active={filterBy === filterItems.price_asc}
        onClick={handleItemClick}
        content="Price: low to high"
      />
    </Menu>
  );
};

export default Filter;
