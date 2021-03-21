import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main className="main">{children}</main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
