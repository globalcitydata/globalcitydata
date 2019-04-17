import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// General Components
import { Grid, Hidden } from '@material-ui/core';

import {
  InstantSearch,
  Configure,
  connectHits,
  Pagination,
} from 'react-instantsearch-dom';

import CustomSearchBox from '../customSearchBox';
import RefinementMenu from './dataSearch/refinementMenu';
import Hit from './dataSearch/hit';

import { tagNames } from './dataUtils';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  main: {
    width: '70%',
    maxWidth: '900px',
    paddingLeft: '15px',
  },
  sidebar: {
    width: '25%',
    height: '75vh',
    overflow: 'auto',
    position: 'sticky',
    top: '100px',
    '@media (max-width: 1000px)': {
      width: '60%',
    },
  },
  pagination: {
    margin: '0 auto',
    paddingTop: '2rem',
  },
};

const Hits = ({ hits, classes }) => (
  <Grid container spacing={24}>
    {hits.map((hit, i) => (
      <Hit key={hit.objectID} hit={hit} />
    ))}
  </Grid>
);

const CustomHits = connectHits(Hits);

const Search = ({ classes, refinementState }) => (
  <>
    <Hidden smDown>
      <div className={classes.root}>
        <div className={classes.sidebar}>
          <RefinementMenu
            tagNames={tagNames}
            refinementState={refinementState}
          />
        </div>
        <div className={classes.main}>
          <CustomSearchBox />
          <Configure hitsPerPage={6} />
          <CustomHits classes={classes} />
        </div>
      </div>
      <div className={classes.pagination}>
        <Pagination />
      </div>
    </Hidden>
    <Hidden mdUp>
      <div>
        <CustomSearchBox />
        <Configure hitsPerPage={6} />
        <CustomHits classes={classes} />
      </div>
      <div className={classes.pagination}>
        <Pagination />
      </div>
    </Hidden>
  </>
);

const DataSearch = ({ classes, refinementState }) => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="dataList"
  >
    <Search classes={classes} refinementState={refinementState} />
  </InstantSearch>
);

export default withStyles(styles)(DataSearch);
