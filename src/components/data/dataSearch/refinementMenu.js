import React, { useState, useEffect } from 'react';
import {
  connectRefinementList,
  connectCurrentRefinements,
  // ClearRefinements,
  // CurrentRefinements,
} from 'react-instantsearch-dom';
import {
  Paper,
  Button,
  Typography,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Chip,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import { startCase, orderBy } from 'lodash';

const styles = {
  root: {
    padding: '1rem',
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
  clearBtn: {
    marginBottom: '1rem',
  },
  refineWrapper: {
    margin: '10px 0',
  },
  refineTitle: {
    fontSize: '16px',
    fontWeight: '600',
  },
  refineBody: {
    fontSize: '14px',
  },
};

const colors = {
  dataType: 'primary',
  contextualCityLevelData: 'secondary',
  keyProvisioningSectors: 'default',
  spatialScales: 'primary',
  temporalScales: 'secondary',
  worldRegions: 'default',
};

/**
 * @brief All refinement tag chips for a given tag
 */
const RefineTagChips = ({ tag, refine }) => {
  const tagName = tag.label.split('.')[1];
  return (
    <>
      {tag.items.map((refinement) => {
        const { label, value } = refinement;
        const handleClick = (e) => {
          e.preventDefault();
          refine(value);
        };
        return (
          <Chip
            label={label}
            color={colors[tagName]}
            onClick={handleClick}
            key={label}
            style={{ margin: '0 10px 10px 0' }}
          />
        );
      })}
    </>
  );
};

/**
 * List all the current refinements
 * @param items: object[] of current refinements
 */
const CurrentRefinements = ({ items, refine, classes }) => (
  <>
    {items.map(tag => <RefineTagChips tag={tag} refine={refine} key={tag.label} />)}
  </>
);

// Connect Current Refinements
const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

/**
 * Button to clear refinements
 * @param items: object[] of current refinements
 * @param refine: function clears current refinements
 */
const ClearRefinements = ({ items, refine, classes }) => (
  <Button
    onClick={() => refine(items)}
    disabled={!items.length}
    color="primary"
    variant="outlined"
    className={classes.clearBtn}
  >
    Clear Refinements
  </Button>
);

// Connect Clear Refinements
const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

const RefinementList = ({
  items,
  currentRefinement,
  refine,
  tagName,
  classes,
}) => {
  const [checkedItems, setCheckedItems] = useState(currentRefinement);
  useEffect(() => {
    setCheckedItems(currentRefinement);
  });
  return (
    <div>
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
                    component={Link}
                    to={"dataExplore"}
                    spy
                    smooth
                    offset={-100}
                    duration={500}
                    onClick={e => {
                      // make sure page doesn't reload
                      e.preventDefault();
                      // update checkedItems state
                      setCheckedItems(prevArray => {
                        let newArray = [];
                        if (prevArray.includes(item.label)) {
                          // prevArray includes item. filter out item
                          newArray = prevArray.filter(
                            prevItem => prevItem !== item.label
                          );
                        } else {
                          // prevArray doesn't include item, so add to list
                          newArray = [...prevArray, item.label];
                        }
                        return newArray;
                      });
                      // don't forget to refine hits
                      refine(item.value);
                    }}
                    checked={checkedItems.includes(item.label)}
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
      <br />
    </div>
  );
};

const CustomRefinement = connectRefinementList(RefinementList);

const RefinementMenu = ({ tagNames, classes, refinementState }) => {
  // pull refinement and attr from refinementState if possible
  // else make blank values
  const oldRefinement = refinementState ? refinementState.refinement : [];
  const attr = refinementState ? refinementState.attr : "";
  return (
    <Paper className={classes.root}>
      <CustomClearRefinements classes={classes} />
      <br />
      <CustomCurrentRefinements classes={classes} />
      {tagNames.map(tag => {
        const attribute = `fields.${tag}.en-US`;
        // if tag == attribute, set refinement, else set to blank array
        const refinement = tag === attr ? oldRefinement : [];
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
