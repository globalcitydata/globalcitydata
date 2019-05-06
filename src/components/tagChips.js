import React from 'react';
import { navigate } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const tagObjToTagList = (tags) => {
  const tagList = [];
  try {
    Object.entries(tags).forEach((tag) => {
      // tag -> ["dataType", ["Dataset"]]
      // tag -> ["spatialScales", ["Whole City", "National Urban"]]
      // etc...
      const tagName = tag[0];
      const attributes = tag[1];
      if (attributes) { // if any associated attributes
        Object.entries(attributes).forEach((attribute) => {
          // attribute -> [0, "environment"]
          // etc...
          const attributeName = attribute[1]; // disregard attribute[0]
          tagList.push([tagName, attributeName]); // ex: ['spatialScales', 'Whole City']
        });
      }
    });
  } catch (error) {
    return tagList;
  }
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
