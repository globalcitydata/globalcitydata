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
  Typography,
  IconButton,
  Link as MuiLink,
} from '@material-ui/core';

const styles = theme => ({
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
    [theme.breakpoints.up('xl')]: {
      padding: '0 20%',
    },
  },
  list: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    padding: '0',
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
    width: 'fit-content',
  },
  link: {
    padding: '10px 12px',
  },
});

const links = [
  // { url: '/', name: 'Global City Data', local: true },
  { url: '/', name: 'Home', local: true },
  { url: '/data/', name: 'Data', local: true },
  { url: '/publications/', name: 'Publications', local: true },
  { url: '/about/', name: 'About', local: true },
  { url: '/contact/', name: 'Contact', local: true },
  { url: 'https://medium.com/@globalcitydata', name: 'Blog', local: false },
  {
    url: 'https://forms.gle/B2HhrekHMpt1ZSv17',
    name: 'Submit Data',
    local: false,
  },
];

const NavLink = (props) => {
  const {
    url, local, classes, children, title,
  } = props;
  return (
    <div>
      {local ? (
        <ListItem // Local link
          button
          component={Link}
          to={url}
          className={classNames(classes.link, title && classes.headerTitle)}
        >
          {children}
        </ListItem>
      ) : (
        <ListItem // External Link
          button
          component={MuiLink}
          href={url}
          className={classes.link}
          target="_blank"
          rel="noopener"
        >
          {children}
        </ListItem>
      )}
    </div>
  );
};

const NavLinkList = (props) => {
  const { classes } = props;
  return (
    <List className={classes.list}>
      {links.map((link) => {
        const { url, name, local } = link;
        return (
          <NavLink url={url} local={local} key={name} classes={classes}>
            <Typography variant="subtitle1">{name}</Typography>
          </NavLink>
        );
      })}
    </List>
  );
};

const Header = ({ classes }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar className={classes.toolbar}>
          {/* Display menu and drawer only on small devices */}
          <Hidden mdUp>
            {/* Drawer Icon */}
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => setOpen(true)}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            {/* Drawer Component */}
            <Drawer
              className={classes.drawer}
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {/* Close Icon */}
              <div className={classes.drawerHeader}>
                <IconButton onClick={() => setOpen(false)}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              {/* Header Title */}
              <NavLink url="/" local classes={classes}>
                <Typography component="h1" variant="subtitle1">
                  Global City Data
                </Typography>
              </NavLink>
              <Divider />
              {/* Nav Link List */}
              <NavLinkList classes={classes} />
            </Drawer>
          </Hidden>
          {/* Display header on all devices */}
          <div className={classes.grow}>
            {/* Header Title */}
            <NavLink url="/" local classes={classes} title>
              <Typography component="h1" variant="h4">
                Global City Data
              </Typography>
            </NavLink>
          </div>
          {/* Display normal link list only on medium and larger devices */}
          <Hidden smDown>
            <NavLinkList classes={classes} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
