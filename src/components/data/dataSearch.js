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
  Hidden,
  Card,
  CardContent,
  CardActions,
  Chip,
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
    position: 'relative',
  },
  title: {
    marginBottom: '1rem',
  },
  content: {
    paddingTop: '1rem',
    paddingBottom: '4rem',
  },
  chip: {
    margin: '0 10px 10px 0',
  },
  action: {
    position: 'absolute',
    bottom: '0.6rem',
  },
};

// Utils
const Hit = ({ hit, classes }) => {
  const dataObj = getDataObjFromHit(hit);
  return (
    <Grid item xs={12} md={6} xl={4}>
      <Card className={`${classes.card} lift`}>
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            {dataObj.title}
          </Typography>
          <Divider />
          <div className={classes.content}>
            <Chip label="Example tag" className={classes.chip} />
            <Chip
              color="primary"
              label="Another one"
              className={classes.chip}
            />
            <Chip color="secondary" label="one more baby" />
          </div>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            component={Link}
            to={`/data/${dataObj.slug}/`}
            className={classes.action}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
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
