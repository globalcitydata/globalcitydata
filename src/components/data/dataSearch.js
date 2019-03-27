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

const Search = ({ classes }) => (
  <Grid container>
    <Hidden smDown>
      <Grid item xs={12} md={3}>
        <RefinementMenu tagNames={tagNames} />
      </Grid>
    </Hidden>
    <Grid item md={1} />
    <Grid item xs={12} md={7}>
      <CustomSearchBox />
      <Configure hitsPerPage={6} />
      <CustomHits classes={classes} />
    </Grid>
    <div className={classes.pagination}>
      <Pagination />
    </div>
  </Grid>
);

const DataSearch = ({ classes }) => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="dataList"
  >
    <Search classes={classes} />
  </InstantSearch>
);

export default withStyles(styles)(DataSearch);
