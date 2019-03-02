import React from 'react';
import {
 OutlinedInput, Paper, InputBase, IconButton 
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { connectSearchBox } from 'react-instantsearch-dom';

const styles = {
  root: {
    padding: '0.5rem 1rem',
    width: '100%',
    marginBottom: '2rem',
    display: 'flex',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
};

const SearchBox = ({ currentRefinement, refine, classes }) => (
  <Paper className={classes.root}>
    <InputBase
      value={currentRefinement}
      placeholder="Search here..."
      onChange={e => refine(e.target.value)}
      style={{ width: '100%' }}
    />
    <IconButton className={classes.iconButton} aria-label="Search">
      <Search />
    </IconButton>
  </Paper>
  // <Paper>
  //   <div className={{ width: '100%' }}>
  //     <InputBase className={classes.input} placeholder="Search Google Maps" />

  //   </div>
  // </Paper>
);

const CustomSearchBox = connectSearchBox(withStyles(styles)(SearchBox));

// export default withStyles(styles)(CustomSearchBox);
export default CustomSearchBox;
