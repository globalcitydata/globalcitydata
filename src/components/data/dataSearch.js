import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// General Components
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
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
};

// Utils

const Hit = ({ hit }) => {
  const dataObj = getDataObjFromHit(hit);
  return (
    <Grid item xs={12} md={6} xl={4}>
      <Card style={{ height: '100%' }}>
        <CardHeader title={dataObj.title} />
        {/* <CardContent>
          <h3>{dataObj.title}</h3>
        </CardContent> */}
        <CardActions>
          <Button
            color="primary"
            component={Link}
            to={`/data/${dataObj.slug}/`}
          >
            View Data
          </Button>
        </CardActions>
      </Card>
    </Grid>
    // </Grid>
  );
};

const Hits = ({ hits, classes }) => (
  <Grid container spacing={24}>
    {hits.map(hit => (
      <Hit key={hit.objectID} hit={hit} />
    ))}
  </Grid>
);

// 2. Connect the component using the connector
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
