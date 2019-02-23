import React from 'react';

// Components
import Header from './header';

export default ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
