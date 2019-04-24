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
    maxWidth: '900px',
    margin: '0 auto 2rem',
    display: 'flex',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: 'dimgrey',
  },
};

const SearchBox = ({
 currentRefinement, refine, classes, msg 
}) => (
  <Paper className={classes.root}>
    <InputBase
      value={currentRefinement}
      placeholder={msg}
      onChange={e => refine(e.target.value)}
      style={{ width: '100%' }}
    />
    <div className={classes.iconButton} aria-label="Search">
      <Search />
    </div>
  </Paper>
);

const CustomSearchBox = connectSearchBox(withStyles(styles)(SearchBox));

export default CustomSearchBox;
