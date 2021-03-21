import React from 'react';
import { Divider } from 'semantic-ui-react';
import Filter from './components/Filter';
import Layout from './components/Layout';
import Books from './features/books/Books';

const App = () => {
  return (
    <Layout>
      <Filter />
      <Divider />
      <Books />
    </Layout>
  );
};

export default App;
