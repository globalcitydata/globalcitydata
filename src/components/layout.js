import React from 'react';

// Components
import Header from './header';

export default ({ children }) => (
  <div style={{ margin: '3rem auto', maxWidth: '800px', padding: '0 1rem' }}>
    <Header />
    {children}
  </div>
);
