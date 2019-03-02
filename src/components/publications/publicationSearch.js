import React from 'react';

// General Components
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem } from '@material-ui/core';
import {
  InstantSearch,
  Configure,
  connectHits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import { TextButton } from '../buttons';

const styles = {};

const Hit = ({ hit }) => {
  console.log(hit.fields.relatedData['en-US'].sys);
  return (
    <ListItem>
      <Typography variant="body2">{hit.fields.body['en-US']}</Typography>
      <hr />
    </ListItem>
  );
};

const Hits = ({ hits }) => (
  <List>
    {hits.map(hit => (
      <Hit key={hit.objectID} hit={hit} />
    ))}
  </List>
);

const CustomHits = connectHits(Hits);

const Search = () => (
  <>
    <SearchBox />
    <Configure hitsPerPage={8} />
    <CustomHits />
    <Pagination />
  </>
);

const DataSearch = () => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="publications"
  >
    <Search />
  </InstantSearch>
);

export default withStyles(styles)(DataSearch);
