import React from 'react';
import { Container } from 'semantic-ui-react';
import Filter from './components/Filter';
import MenuComponent from './components/Menu';
import Books from './features/books/Books';

const App = () => {
  return (
    <Container>
      <MenuComponent />
      <Filter />
      <Books />
    </Container>
  );
};

export default App;
