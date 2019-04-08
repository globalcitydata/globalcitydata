import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  Divider,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 0,
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: 15,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    padding: '0 6%',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  grow: {
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: '1.6rem',
    '@media (max-width: 540px)': {
      fontSize: '1.4rem',
    },
  },
  link: {
    fontSize: '1.3rem',
  },
};

const NavLink = (props) => {
  const {
 to, children, list, external 
} = props;
  return (
    <>
      {list ? (
        <ListItem>
          <Button component={Link} to={to} {...props}>
            {children}
          </Button>
        </ListItem>
      ) : (
        <Button component={Link} to={to} {...props}>
          {children}
        </Button>
      )}
    </>
  );
};

const NavLinkList = ({ classes, list }) => (
  <List>
    {list && (
      <>
        <NavLink to="/" className={classes.headerTitle} list={list}>
          Global City Data
        </NavLink>
        <Divider />
      </>
    )}
    <NavLink to="/" className={classes.link} list={list}>
      Home
    </NavLink>
    <NavLink to="/data" className={classes.link} list={list}>
      Data
    </NavLink>
    <NavLink to="/publications" className={classes.link} list={list}>
      Publications
    </NavLink>
    <NavLink to="/about/" className={classes.link} list={list}>
      About
    </NavLink>
    <NavLink to="/contact/" className={classes.link} list={list}>
      Contact
    </NavLink>
    {/* <NavLink
      to="https://forms.gle/Jmzy3WNU2twitsmG8"
      className={classes.link}
      list={list}
      external
    >
      Submit Data
    </NavLink> */}
  </List>
);

const Header = ({ classes }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar className={classes.toolbar}>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => setOpen(true)}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.grow}>
            <NavLink
              to="/"
              className={classNames(classes.headerTitle, open && classes.hide)}
            >
              Global City Data
            </NavLink>
          </div>
          <Hidden smDown>
            <NavLinkList classes={classes} list={false} />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <NavLinkList classes={classes} list />
      </Drawer>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
