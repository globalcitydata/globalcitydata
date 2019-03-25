import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import Header from './header';
import Footer from './footer';

const styles = {
  // global styles
  '@global': {
    '.lift': {
      position: 'relative',
      top: '0',
      transition: 'top ease 0.2s',
      '&:hover': {
        top: '-4px',
        boxShadow: '0 10px 10px -6px rgba(0, 0, 0, 0.25)',
        // boxShadow: '0 10px 10px -6px rgb(169,169,169)',
      },
    },
    // '.wrapper': {
    //   marginTop: '100px',
    // },
  },
  // Layout styles
  contentWrap: {
    marginTop: '65px',
    minHeight: '70vh',
    '@media (max-width: 720px)': {
      marginTop: '50px',
    },
  },
};

const Layout = ({ children, classes }) => (
  <>
    <Header />
    <main className={classes.contentWrap}>{children}</main>
    <Footer />
  </>
);

export default withStyles(styles)(Layout);
