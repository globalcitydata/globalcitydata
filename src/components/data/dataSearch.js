import React from 'react';
import { Link } from 'gatsby';

// General Components
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  InstantSearch,
  Configure,
  connectHits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import ButtonLink from '../buttons';

import RefinementMenu from './dataSearch/RefinementMenu';

import { getDataObjFromHit, tagNames } from './dataUtils';

const styles = {};

// Utils

const Hit = ({ hit }) => {
  const dataObj = getDataObjFromHit(hit);
  console.log(hit);
  return (
    <Grid item xs={12} md={6} xl={4}>
      <Card style={{ height: '100%' }}>
        <CardHeader title={dataObj.title} />
        {/* <CardContent>
          <h3>{dataObj.title}</h3>
        </CardContent> */}
        <CardActions>
          <Button
            color="secondary"
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

const Hits = ({ hits }) => (
  <Grid container spacing={24}>
    {hits.map(hit => (
      <Hit key={hit.objectID} hit={hit} />
    ))}
  </Grid>
);

// 2. Connect the component using the connector
const CustomHits = connectHits(Hits);

const Search = () => (
  <Grid container>
    <Grid item xs={12} md={3}>
      <RefinementMenu tagNames={tagNames} />
    </Grid>
    <Grid item md={1} />
    <Grid item xs={12} md={7}>
      <SearchBox />
      <Configure hitsPerPage={8} />
      <CustomHits />
      <Pagination />
    </Grid>
  </Grid>
);

const DataSearch = () => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="dataList"
  >
    <Search />
  </InstantSearch>
);

export default withStyles(styles)(DataSearch);
