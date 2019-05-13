import React from 'react';
import { Link } from 'gatsby';

// General Components
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  List,
  ListItem,
  Paper,
  Link as MuiLink,
  CircularProgress,
} from '@material-ui/core';
import {
  InstantSearch,
  Configure,
  connectHits,
  Pagination,
} from 'react-instantsearch-dom';
import CustomSearchBox from '../customSearchBox';

const styles = {
  hits: {
    maxWidth: '850px',
    margin: '0 auto',
  },
  hit: {
    padding: '1rem',
  },
  pagination: {
    paddingTop: '2rem',
  },
  progress: {
    textAlign: 'center',
    margin: '25px auto 0',
  },
};

const HitContent = ({ slug, body, classes }) => (
  <Paper className={`${classes.hit} lift`}>
    <Typography variant="body2" gutterBottom>
      {body}
      {'  - '}
      <MuiLink component={Link} to={slug}>
        Associated Data
      </MuiLink>
    </Typography>
  </Paper>
);

const Hit = ({ hit, classes, dataList }) => {
  const pubBody = hit.fields.body['en-US'];
  const relatedDataID = hit.fields.relatedData['en-US'].sys.id;
  const relatedDataSlug = `/data/${dataList[relatedDataID]}`;
  return (
    <>
      {dataList[relatedDataID] && (
        <ListItem>
          <HitContent slug={relatedDataSlug} body={pubBody} classes={classes} />
        </ListItem>
      )}
    </>
  );
};

const Hits = ({ hits, classes, dataList }) => (
  <>
    {hits.length === 0 ? (
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    ) : (
      <List className={classes.hits}>
        {hits.map(hit => (
          <Hit key={hit.objectID} hit={hit} classes={classes} dataList={dataList} />
        ))}
      </List>
    )}
  </>

);

const CustomHits = connectHits(Hits);

const Search = ({ classes, dataList }) => (
  <>
    <CustomSearchBox msg="Search publications by author or title..." />
    <Configure hitsPerPage={7} />
    <CustomHits classes={classes} dataList={dataList} />
    <div className={classes.pagination}>
      <Pagination />
    </div>
  </>
);

const DataSearch = ({ classes, dataList }) => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="publications"
  >
    <Search classes={classes} dataList={dataList} />
  </InstantSearch>
);

export default withStyles(styles)(DataSearch);
