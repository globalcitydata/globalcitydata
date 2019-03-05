import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import Header from './header';

const styles = {
  '@global': {
    '.lift': {
      position: 'relative',
      top: '0',
      transition: 'top ease 0.2s',
      '&:hover': {
        top: '-4px',
        boxShadow: '0 10px 10px -6px rgba(0, 0, 0, 0.25)',
      },
    },
    '.wrapper': {
      marginTop: '100px',
    },
  },
};

const Layout = ({ children, classes }) => (
  <>
    <Header />
    {children}
  </>
);

export default withStyles(styles)(Layout);
