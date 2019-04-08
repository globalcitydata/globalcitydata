import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import { LinearProgress } from '@material-ui/core';
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
      },
    },
  },
  // Layout styles
  root: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    top: '0%',
    width: '100%',
    zIndex: '10',
  },
  contentWrap: {
    position: 'relative',
    marginTop: '65px',
    minHeight: '70vh',
    '@media (max-width: 720px)': {
      marginTop: '50px',
    },
  },
};

const Layout = ({ children, classes, showProgress }) => (
  <div className={classes.root}>
    {showProgress && (
      <LinearProgress color="primary" className={classes.progress} />
    )}
    <Header />
    <main className={classes.contentWrap}>{children}</main>
    <Footer />
  </div>
);

export default withStyles(styles)(Layout);
