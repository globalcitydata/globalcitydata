import React from 'react';
import { Link } from 'gatsby';

// General Components
import styled from 'styled-components';
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
  connectHits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import { TextButton } from '../buttons';

// Page Components
import RefinementMenu from './dataSearch/RefinementMenu';

// Utils
const tagNames = [
  'dataType',
  'determinants',
  'sectors',
  'spatialScales',
  'temporalScales',
  'worldRegions',
];

const getDataObjFromHit = (hit) => {
  const tags = {};
  // Get Tags from hit
  tagNames.forEach((tag) => {
    tags[tag] = hit.fields[tag]['en-US'];
  });
  // Create data object
  const dataObj = {
    tags,
    title: hit.fields.title['en-US'],
    slug: hit.fields.slug['en-US'],
  };
  return dataObj;
};

const Hit = ({ hit }) => {
  const dataObj = getDataObjFromHit(hit);
  return (
    // <Grid container spacing={24}>
    <Grid item xs={12} md={6} xl={4}>
      <Card style={{ height: '100%' }}>
        <CardHeader title={dataObj.title} />
        {/* <CardContent>
          <h3>{dataObj.title}</h3>
        </CardContent> */}
        <CardActions>
          <TextButton label="View Data" href={`/data/${dataObj.slug}/`} />
          {/* <Link to={`/data/${dataObj.slug}/`}>View Data</Link> */}
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
      <CustomHits />
      {/* <Pagination /> */}
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

export default DataSearch;
