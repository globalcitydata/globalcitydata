import React from 'react';
import { Typography } from '@material-ui/core';

const PageTitle = ({ children }) => (
  <Typography variant="h3" gutterBottom>
    {children}
  </Typography>
);

export default PageTitle;
