import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const ListLink = ({ to, children }) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={to}>{children}</Link>
  </li>
);

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header style={{ marginBottom: '1.5rem' }}>
        <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
          <h3 style={{ display: 'inline' }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: 'none', float: 'right' }}>
          <ListLink to="/data">Data</ListLink>
          <ListLink to="/publications">Publications</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
    )}
  />
);
