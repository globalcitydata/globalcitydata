import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Element } from 'react-scroll';
import {
  Grid, Hidden, Typography, CircularProgress,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import {
  InstantSearch,
  Configure,
  connectHits,
  Pagination,
  connectInfiniteHits,
} from 'react-instantsearch-dom';
import CustomSearchBox from '../customSearchBox';
import RefinementMenu from './dataSearch/refinementMenu';
import Hit from './dataSearch/hit';

import { tagNames } from './dataUtils';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  main: {
    width: '70%',
    maxWidth: '900px',
    paddingLeft: '15px',
  },
  sidebar: {
    width: '25%',
    height: '75vh',
    overflow: 'auto',
    position: 'sticky',
    top: '100px',
    '@media (max-width: 1000px)': {
      width: '60%',
    },
  },
  pagination: {
    margin: '0 auto',
    paddingTop: '2rem',
  },
  smallDevice: {
    background: blue[600],
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '25px',
    borderRadius: '5px',
    color: 'white',
  },
  smallDeviceTitle: {
    fontWeight: 'bold',
    color: 'inherit',
  },
  smallDeviceMsg: {
    maxWidth: '500px',
    margin: '0 auto',
    color: 'inherit',
  },
  progress: {
    textAlign: 'center',
    margin: '25px auto 0',
  },
};

const SmallDeviceMessage = ({ classes }) => (
  <div className={classes.smallDevice}>
    <Typography variant="h6" gutterBottom className={classes.smallDeviceTitle}>
    *** Small Device Message ***
    </Typography>
    <Typography paragraph className={classes.smallDeviceMsg}>
    Some features are disabled on smaller devices.
    Please use a larger device to fully experience the Data Explore page.
    </Typography>
  </div>
);

const Hits = ({ hits, classes, authors }) => (
  <>
    {hits.length === 0 ? (
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    ) : (
      <Grid container spacing={24}>
        {hits.map((hit, i) => (
          <Hit key={hit.objectID} hit={hit} authors={authors} />
        ))}
      </Grid>
    )}
  </>
);

const CustomHits = connectHits(Hits);

// const InfiniteHits = ({ hits, classes }) => {
//   const [sentinel, setSentinel] = useState(null);
//   return (
//     <div>
//       <CustomHits hits={hits} classes={classes} setSentinel={setSentinel} />
//     </div>
//   );
// };

// const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

const Search = ({ classes, refinementState, authors }) => (
  <Element name="dataExplore">
    {/* Show following only on medium+ devices */}
    <Hidden smDown>
      <div className={classes.root}>
        <div className={classes.sidebar}>
          <RefinementMenu
            tagNames={tagNames}
            refinementState={refinementState}
          />
        </div>
        <div className={classes.main}>
          <CustomSearchBox msg="Search datasets by keyword..." />
          <Configure hitsPerPage={6} />
          {/* <CustomInfiniteHits classes={classes} /> */}
          <CustomHits classes={classes} authors={authors} />
        </div>
      </div>
    </Hidden>
    {/* Show following only on small devices */}
    <Hidden mdUp>
      <SmallDeviceMessage classes={classes} />
      <CustomSearchBox msg="Search datasets by keyword..." />
      <Configure hitsPerPage={6} />
      {/* <CustomInfiniteHits classes={classes} /> */}
      <CustomHits classes={classes} authors={authors} />
    </Hidden>
    <div className={classes.pagination}>
      <Pagination />
    </div>
  </Element>
);

const DataSearch = ({ classes, refinementState, authors }) => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="dataList"
  >
    <Search classes={classes} refinementState={refinementState} authors={authors} />
  </InstantSearch>
);

export default withStyles(styles)(DataSearch);
