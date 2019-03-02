import React from 'react';
import {
  RefinementList,
  // CurrentRefinements,
  ClearRefinements,
} from 'react-instantsearch-dom';

import { Paper } from '@material-ui/core';
import { startCase, orderBy } from 'lodash';

const Refinement = ({ tagName }) => {
  const attribute = `fields.${tagName}.en-US`;
  return (
    <>
      <h4>{startCase(tagName)}</h4>
      <RefinementList
        transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])
        }
        attribute={attribute}
      />
    </>
  );
};

const RefineBar = ({ tagNames }) => (
  <>
    {tagNames.map(tag => (
      <Refinement tagName={tag} />
    ))}
  </>
);

const RefinementMenu = ({ tagNames }) => (
  <Paper style={{ padding: '1rem' }}>
    {/* <CurrentRefinements /> */}
    <ClearRefinements />
    <RefineBar tagNames={tagNames} />
  </Paper>
);

export default RefinementMenu;
