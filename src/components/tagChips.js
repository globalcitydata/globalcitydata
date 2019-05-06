import React from 'react';
import { navigate } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const tagObjToTagList = (tags) => {
  const tagList = [];
  Object.entries(tags).forEach(tag => Object.entries(tag[1]).forEach(
    attribute => tagList.push([tag[0], attribute[1]]), // ex: ['contextualCityLevelData', 'environment']
  ));
  return tagList;
};

const colors = {
  dataType: 'primary',
  contextualCityLevelData: 'secondary',
  keyProvisioningSectors: 'default',
  spatialScales: 'primary',
  temporalScales: 'secondary',
  worldRegions: 'default',
};

const styles = {
  chip: {
    margin: '0 10px 10px 0',
  },
};

const TagChip = ({
  tag, attribute, classes,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/data/', {
      replace: true,
      state: {
        attr: tag,
        refinement: [attribute],
      },
    });
  };
  return (
    <Chip
      color={colors[tag]}
      label={attribute}
      onClick={handleClick}
      className={classes.chip}
      key={attribute}
    />
  );
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
        <TagChip
          tag={tag[0]}
          attribute={tag[1]}
          classes={classes}
          key={tag[1]}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(TagChips);
