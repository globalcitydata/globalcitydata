import React, { useState, useEffect } from 'react';
import {
  connectRefinementList,
  ClearRefinements,
} from 'react-instantsearch-dom';
import {
  Paper,
  Typography,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { startCase, orderBy } from 'lodash';

const styles = {
  root: {
    padding: '1rem',
  },
  clearBtn: {
    marginBottom: '1rem',
  },
  formLabel: {
    fontWeight: '550',
    color: 'black',
    paddingTop: '1rem',
    marginBottom: '0.5rem',
  },
  checkbox: {
    padding: '8px',
  },
};

const RefinementList = (props) => {
  const {
 items, currentRefinementm, refine, tagName, classes 
} = props;
  const checked = [];
  useEffect(() => {
    items.forEach((_, i) => {
      checked[i] = false;
    });
  });
  const [checkedItems, setCheckedItems] = useState(checked);
  // console.log(props);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" className={classes.formLabel}>
        {startCase(tagName)}
      </FormLabel>
      <FormGroup>
        {items.map((item, i) => (
          <div key={item.label}>
            <FormControlLabel
              control={
                /* eslint-disable */
                <Checkbox
                  color="primary"
                  className={classes.checkbox}
                  onClick={e => {
                    e.preventDefault();
                    refine(item.value);
                    setCheckedItems(prev => {
                      prev[i] = !prev[i];
                      return prev;
                    });
                  }}
                  checked={checkedItems[i]}
                />
                /* eslint-disable */
              }
              label={
                <Typography variant="caption">{`${item.label} (${
                  item.count
                })`}</Typography>
              }
            />
          </div>
        ))}
      </FormGroup>
    </FormControl>
  );
};

const CustomRefinement = connectRefinementList(RefinementList);

const RefinementMenu = ({ tagNames, classes, refinementState }) => {
  let refinement = [];
  let attr = "";
  if (refinementState) {
    let { refinement, attr } = refinementState;
  }
  return (
    <Paper className={classes.root}>
      {/* <ClearRefinements className={classes.clearBtn} /> */}
      {tagNames.map(tag => {
        const attribute = `fields.${tag}.en-US`;
        if (!refinement || attr != tag) {
          refinement = [];
        }
        return (
          <CustomRefinement
            classes={classes}
            attribute={attribute}
            transformItems={items =>
              orderBy(items, ["label", "count"], ["asc", "desc"])
            }
            defaultRefinement={refinement}
            tagName={tag}
            key={tag}
          />
        );
      })}
    </Paper>
  );
};

export default withStyles(styles)(RefinementMenu);
