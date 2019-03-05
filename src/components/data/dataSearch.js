import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// General Components
import {
  Grid,
  Paper,
  Divider,
  Button,
  Typography,
  Grow,
} from '@material-ui/core';

import {
  InstantSearch,
  Configure,
  connectHits,
  Pagination,
} from 'react-instantsearch-dom';

import CustomSearchBox from '../customSearchBox';
import RefinementMenu from './dataSearch/RefinementMenu';

import { getDataObjFromHit, tagNames } from './dataUtils';

const styles = {
  pagination: {
    margin: '0 auto',
    paddingTop: '2rem',
  },
  card: {
    height: '100%',
    padding: '1rem',
    position: 'relative',
  },
  title: {
    paddingBottom: '2rem',
  },
  content: {
    paddingBottom: '4.5rem',
  },
  action: {
    position: 'absolute',
    bottom: '1rem',
    width: '100%',
  },
};

// Utils
const Hit = ({ hit, classes }) => {
  const dataObj = getDataObjFromHit(hit);
  return (
    <Grid item xs={12} md={6} xl={4}>
      <Paper className={`${classes.card} lift`}>
        <Typography variant="h5" className={classes.title}>
          {dataObj.title}
        </Typography>
        <div className={classes.content}>
          <Typography variant="caption">tags will go here</Typography>
        </div>
        <div className={classes.action}>
          {/* <Divider variant="insent" /> */}
          <Button
            color="primary"
            component={Link}
            to={`/data/${dataObj.slug}/`}
          >
            View Data
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

const Hits = ({ hits, classes }) => (
  <Grid container spacing={24}>
    {hits.map((hit, i) => (
      <Hit key={hit.objectID} hit={hit} classes={classes} />
    ))}
  </Grid>
);

const CustomHits = connectHits(Hits);

const Search = ({ classes }) => (
  <Grid container>
    <Grid item xs={12} md={3}>
      <RefinementMenu tagNames={tagNames} />
    </Grid>
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
