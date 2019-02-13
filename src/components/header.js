import React from 'react';
import { Link } from 'gatsby';

const ListLink = ({ to, children }) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={to}>{children}</Link>
  </li>
);

export default () => (
  <>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline' }}>Global City Data</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/story/">Our Story</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  </>
);
