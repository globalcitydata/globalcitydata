import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const tagObjToTagList = (tags) => {
  const tagList = [];
  Object.entries(tags).forEach(tag => Object.entries(tag[1]).forEach(
      attribute => tagList.push([tag[0], attribute[1]]), // ex: ['determinants', 'environment']
    ),);
  return tagList;
};

const colors = {
  dataType: 'primary',
  determinants: 'secondary',
  sectors: 'default',
  spatialScales: 'primary',
  temporalScales: 'secondary',
  worldRegions: 'default',
};

const styles = {
  chip: {
    margin: '0 10px 10px 0',
  },
};

/**
 * Tags param must be in following form
 *
 * {
 *   'dataType': [],
 *   'determinatns': [],
 *   ...
 * }
 */
const TagChips = ({ tags, classes }) => {
  const tagList = tagObjToTagList(tags);
  return (
    <div>
      {tagList.map(tag => (
        <Chip
          color={colors[tag[0]]}
          label={tag[1]}
          className={classes.chip}
          key={tag[1]}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(TagChips);
