import React from 'react';

// General Components
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';

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

const DataCard = ({ hit }) => {
  const dataObj = getDataObjFromHit(hit);
  return (
    // <Grid item xs={12} md={6} xl={4}>
    // <Paper>
    <h3>{dataObj.title}</h3>
    // </Paper>
    // </Grid>
  );
};

const DataList = styled(Hits)``;

const Search = () => (
  <Grid container>
    <Grid item xs={12} md={3}>
      <RefinementMenu tagNames={tagNames} />
    </Grid>
    <Grid item md={1} />
    <Grid item xs={12} md={7}>
      <SearchBox />
      <DataList hitComponent={DataCard} />
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
