// import React from 'react';
// import { Link, StaticQuery, graphql } from 'gatsby';

// // Components
// import Container from "./container";

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Container>
//         <header style={{ marginBottom: '1.5rem' }}>
//           <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
//             <h3 style={{ display: 'inline' }}>
//               {data.site.siteMetadata.title}
//             </h3>
//           </Link>
//           <ul style={{ listStyle: 'none', float: 'right' }}>
//             <ListLink to="/data">Data</ListLink>
//             <ListLink to="/publications">Publications</ListLink>
//             <ListLink to="/about/">About</ListLink>
//             <ListLink to="/contact/">Contact</ListLink>
//           </ul>
//         </header>
//       </Container>
//     )}
//   />
// );

import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import withRoot from '../withRoot';

const NavLink = (props) => {
  const { to, children } = props;
  return (
    <Button component={Link} to={to}>
      {children}
    </Button>
  );
};

const styles = {
  root: {
    flexGrow: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbar: {
    // maxWidth: 1300,
  },
};

const ButtonAppBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="white">
      <Toolbar className={classes.toolbar}>
        {/* <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Global City Data
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/data">Data</NavLink>
        <NavLink to="/publications">Publications</NavLink>
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
      </Toolbar>
    </AppBar>
  </div>
);

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(ButtonAppBar));
