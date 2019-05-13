import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import { CircularProgress } from '@material-ui/core';

const LoadingIndicator = connectStateResults(
  ({ isSearchStalled }) => (isSearchStalled ? (
    <div style={{ textAlign: 'center', marginTop: '25px' }}>
      <CircularProgress />
    </div>
  ) : null),
);

export default LoadingIndicator;
