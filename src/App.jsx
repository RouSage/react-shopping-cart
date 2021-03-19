import React from 'react';
import { Container } from 'semantic-ui-react';
import MenuComponent from './components/Menu';
import Books from './features/books/Books';

const App = () => {
  return (
    <Container>
      <MenuComponent />
      <Books />
    </Container>
  );
};

export default App;
