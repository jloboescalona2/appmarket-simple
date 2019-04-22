import React from 'react';
import { Container } from 'reactstrap';
import classnames from 'classnames';
import Header from '../../components/views/Header';
import Footer from '../../components/views/Footer';

const LayoutWithHeader = ComposedComponent => props => (
  <div
    className={classnames(
      'app-container',
      'd-flex',
      'flex-column',
      'justify-content-between'
    )}
  >
    <Container
      className={classnames(
        'app',
        'flex-grow-1',
        'd-flex',
        'flex-column',
        'justify-content-between'
      )}
    >
      <Header />
      <ComposedComponent {...props} />
    </Container>
    <Footer />
  </div>
);
export default LayoutWithHeader;
