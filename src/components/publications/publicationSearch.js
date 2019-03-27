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
  hits: {
    maxWidth: '850px',
    margin: '0 auto',
  },
  hit: {
    padding: '1rem',
  },
};

const Hit = ({ hit, classes }) => (
  // console.log(hit.fields.relatedData['en-US'].sys);
  <ListItem>
    <Paper className={`${classes.hit} lift`}>
      <Typography variant="body2">{hit.fields.body['en-US']}</Typography>
    </Paper>
    <hr />
  </ListItem>
);

const Hits = ({ hits, classes }) => (
  <List className={classes.hits}>
    {hits.map(hit => (
      <Hit key={hit.objectID} hit={hit} classes={classes} />
    ))}
  </List>
);

const CustomHits = connectHits(Hits);

const Search = ({ classes }) => (
  <>
    <CustomSearchBox />
    <Configure hitsPerPage={7} />
    <CustomHits classes={classes} />
    <Pagination />
  </>
);

const DataSearch = ({ classes }) => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="publications"
  >
    <Search classes={classes} />
  </InstantSearch>
);

export default withStyles(styles)(DataSearch);
