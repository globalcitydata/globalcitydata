import React from 'react';

// General Components
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  List,
  ListItem,
  Paper,
  OutlinedInput,
} from '@material-ui/core';
import {
  InstantSearch,
  Configure,
  connectHits,
  connectSearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import CustomSearchBox from '../customSearchBox';
import { TextButton } from '../buttons';

const styles = {
  hit: {
    padding: '1rem',
  },
};

const Hit = ({ hit }) => {
  console.log(hit.fields.relatedData['en-US'].sys);
  return (
    <ListItem>
      <Paper style={{ padding: '1rem' }}>
        <Typography variant="body2">{hit.fields.body['en-US']}</Typography>
      </Paper>
      <hr />
    </ListItem>
  );
};

const Hits = ({ hits }) => (
  <List style={{ maxWidth: '850px', margin: '0 auto' }}>
    {hits.map(hit => (
      <Hit key={hit.objectID} hit={hit} />
    ))}
  </List>
);

const CustomHits = connectHits(Hits);

const Search = () => (
  <>
    <CustomSearchBox />
    <Configure hitsPerPage={7} />
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
